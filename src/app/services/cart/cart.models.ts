import type { Product } from '../product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

