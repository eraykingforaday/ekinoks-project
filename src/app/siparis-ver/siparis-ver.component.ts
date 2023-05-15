import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { OrderService } from './order.service';

@Component({
  selector: 'app-siparis-ver',
  template: `
    <div *ngIf="items.length; else emptyCart">
      <ul>
        <li *ngFor="let item of items">{{ item.name }} - {{ item.price }}</li>
      </ul>
      <form (ngSubmit)="onSubmit()">
        <input type="text" [(ngModel)]="name" name="name" placeholder="Adı">
        <input type="text" [(ngModel)]="address" name="address" placeholder="Adres">
        <button type="submit">Siparişi Ver</button>
      </form>
    </div>
    <ng-template #emptyCart>
      Sepetiniz boş.
    </ng-template>
  `,
  styleUrls: ['./siparis-ver.component.css']
})
export class SiparisVerComponent {
  items = this.cartService.getItems();
  name = '';
  address = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  onSubmit() {
    const order = { name: this.name, address: this.address, items: this.items };
    this.orderService.createOrder(order).subscribe(() => {
      this.cartService.clearCart();
      this.router.navigate(['/']);
    });
  }
}
