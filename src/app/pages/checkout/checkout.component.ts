import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../services/cart/cart.models';
import { ToastService } from '../../services/toast.service';
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

  constructor(private cart: CartService, private router: Router, private toast: ToastService) {
    this.items$ = cart.items$;
  }

  get total() {
    return this.cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  submit() {
    this.cart.clear();
    this.toast.show('Order placed!');
    this.router.navigate(['/confirmation']);
  }
}
