import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, title: 'Sample Product 1', price: 9.99, image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Sample Product 2', price: 14.99, image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Sample Product 3', price: 19.99, image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Sample Product 4', price: 29.99, image: 'https://via.placeholder.com/300x200' }
  ];

  getProducts() {
    return this.products;
  }
}
