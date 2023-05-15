import { Component, OnInit } from '@angular/core';
import { ListeleService } from './listele.service';

@Component({
  selector: 'app-siparis-listele',
  template: `
  <h2>Siparişler</h2>
  <ul>
    <li *ngFor="let order of orders">{{ order.name }} - {{ order.address }} - {{ order.items }}</li>
  </ul>
`,
  styleUrls: ['./siparis-listele.component.css']
})
export class SiparisListeleComponent {
  orders: any[] = [];

  constructor(private orderService: ListeleService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((orders: any[]) => {
      this.orders = orders;
    });
  }
}
