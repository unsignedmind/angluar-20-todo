import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product?: Product;
  currentImage?: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(id);
    this.currentImage = this.product?.images[0] || this.product?.image;
  }
}
