import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart/cart.service';
import { ToastService } from '../../services/toast.service';

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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cart: CartService,
    private toast: ToastService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(id);
    this.currentImage = this.product?.images[0] || this.product?.image;
  }

  addToCart() {
    if (this.product) {
      this.cart.add(this.product, 1);
      this.toast.show('Added to cart');
    }
  }
}
