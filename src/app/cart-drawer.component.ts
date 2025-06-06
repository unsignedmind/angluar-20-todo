import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from './cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.scss'
})
export class CartDrawerComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  private cart = inject(CartService);
  items$ = this.cart.items$;

  increase(item: CartItem) {
    this.cart.updateQuantity(item.product.id, item.quantity + 1);
  }

  decrease(item: CartItem) {
    this.cart.updateQuantity(item.product.id, item.quantity - 1);
  }

  remove(id: number) {
    this.cart.remove(id);
  }
}
