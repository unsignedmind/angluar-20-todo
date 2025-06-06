import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from './product.service';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
