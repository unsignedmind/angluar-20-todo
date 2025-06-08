import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import type { Product } from '../product.service';
import { CartItem } from './cart.models';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {
  private http = inject(HttpClient);
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    this.load();
  }

  get items() {
    return this.itemsSubject.value;
  }

  private setCart(items: CartItem[]) {
    this.itemsSubject.next(items);
  }

  private load() {
    this.http.get<CartItem[]>('/api/cart').subscribe(items => this.setCart(items));
  }

  add(product: Product, quantity = 1) {
    this.http
      .post<CartItem[]>('/api/cart', {
        productId: product.id,
        quantity
      })
      .subscribe(items => this.setCart(items));
  }

  updateQuantity(productId: number, quantity: number) {
    this.http
      .put<CartItem[]>(`/api/cart/${productId}`, { quantity })
      .subscribe(items => this.setCart(items));
  }

  remove(productId: number) {
    this.http
      .delete<CartItem[]>(`/api/cart/${productId}`)
      .subscribe(items => this.setCart(items));
  }

  clear() {
    // server cart is cleared after checkout, reload to sync state
    this.setCart([]);
  }

  checkout(name: string, address: string) {
    return this.http
      .post<{ message: string; order: unknown }>(
        '/api/checkout',
        { name, address }
      )
      .pipe(tap(() => this.setCart([])));
  }
}
