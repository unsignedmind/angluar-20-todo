import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from './cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  name = '';
  address = '';
  email = '';
  items$!: Observable<CartItem[]>;

  constructor(private cart: CartService, private router: Router) {
    this.items$ = cart.items$;
  }

  get total() {
    return this.cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  submit() {
    this.cart.clear();
    this.router.navigate(['/confirmation']);
  }
}
