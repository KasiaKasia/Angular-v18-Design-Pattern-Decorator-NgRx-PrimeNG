import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrdersStore } from '../../configuration/signal-store/orders.store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly storeOrder = inject(OrdersStore);
}
