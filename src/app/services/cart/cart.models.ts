import { InjectionToken } from '@angular/core';
import type { Product } from '../product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartStorage {
  load(): CartItem[];
  save(items: CartItem[]): void;
}

export const CART_STORAGE = new InjectionToken<CartStorage>('CartStorage');
