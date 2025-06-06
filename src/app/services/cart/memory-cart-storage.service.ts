import { Injectable } from '@angular/core';
import { CartItem, CartStorage } from './cart.models';

@Injectable({ providedIn: 'root' })
export class MemoryCartStorage implements CartStorage {
  private items: CartItem[] = [];
  load(): CartItem[] {
    return this.items;
  }
  save(items: CartItem[]): void {
    this.items = items;
  }
}
