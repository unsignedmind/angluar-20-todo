import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import { CartDrawerComponent } from '../cart-drawer/cart-drawer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CartDrawerComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  drawerOpen = false;
  private cart = inject(CartService);
  count$ = this.cart.items$.pipe(
    map(items => items.reduce((sum, i) => sum + i.quantity, 0))
  );
}
