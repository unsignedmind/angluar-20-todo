import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { Product } from '../product.service';
import { CART_STORAGE, CartItem } from './cart.models';

@Injectable({ providedIn: 'root' })
export class CartService {
  private storage = inject(CART_STORAGE);
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.storage.load());
  items$ = this.itemsSubject.asObservable();

  get items() {
    return this.itemsSubject.value;
  }

  private persist(items: CartItem[]) {
    this.itemsSubject.next(items);
    this.storage.save(items);
  }

  add(product: Product, quantity = 1) {
    const items = [...this.itemsSubject.value];
    const item = items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity = Math.min(item.quantity + quantity, product.stock);
    } else {
      items.push({ product, quantity: Math.min(quantity, product.stock) });
    }
    this.persist(items);
  }

  updateQuantity(productId: number, quantity: number) {
    const items = [...this.itemsSubject.value];
    const item = items.find(i => i.product.id === productId);
    if (!item) return;
    quantity = Math.min(Math.max(quantity, 1), item.product.stock);
    item.quantity = quantity;
    this.persist(items);
  }

  remove(productId: number) {
    const items = this.itemsSubject.value.filter(i => i.product.id !== productId);
    this.persist(items);
  }

  clear() {
    this.persist([]);
  }
}
