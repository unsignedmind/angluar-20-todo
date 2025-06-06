import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Sample Product 1',
      price: 9.99,
      image: 'https://placehold.co/300x200?text=Prod+1',
      images: [
        'https://placehold.co/600x400?text=Prod+1+-+Image+1',
        'https://placehold.co/600x400?text=Prod+1+-+Image+2',
        'https://placehold.co/600x400?text=Prod+1+-+Image+3',
      ],
      description: 'Description for product 1.',
      stock: 5
    },
    {
      id: 2,
      title: 'Sample Product 2',
      price: 14.99,
      image: 'https://placehold.co/300x200?text=Prod+2',
      images: [
        'https://placehold.co/600x400?text=Prod+2+-+Image+1',
        'https://placehold.co/600x400?text=Prod+2+-+Image+2',
        'https://placehold.co/600x400?text=Prod+2+-+Image+3',
      ],
      description: 'Description for product 2.',
      stock: 8
    },
    {
      id: 3,
      title: 'Sample Product 3',
      price: 19.99,
      image: 'https://placehold.co/300x200?text=Prod+3',
      images: [
        'https://placehold.co/600x400?text=Prod+3+-+Image+1',
        'https://placehold.co/600x400?text=Prod+3+-+Image+2',
        'https://placehold.co/600x400?text=Prod+3+-+Image+3',
      ],
      description: 'Description for product 3.',
      stock: 3
    },
    {
      id: 4,
      title: 'Sample Product 4',
      price: 29.99,
      image: 'https://placehold.co/300x200?text=Prod+4',
      images: [
        'https://placehold.co/600x400?text=Prod+4+-+Image+1',
        'https://placehold.co/600x400?text=Prod+4+-+Image+2',
        'https://placehold.co/600x400?text=Prod+4+-+Image+3',
      ],
      description: 'Description for product 4.',
      stock: 10
    }
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find(p => p.id === id);
  }
}
