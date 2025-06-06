import { Injectable } from '@angular/core';
import { CartItem, CartStorage } from './cart.models';

@Injectable({ providedIn: 'root' })
export class LocalStorageCartStorage implements CartStorage {
  private key = 'cart';
  load(): CartItem[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }
  save(items: CartItem[]): void {
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
