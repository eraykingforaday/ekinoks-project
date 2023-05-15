import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-order-details',
  template: `
    <h2>Sipariş {{ order.id }}</h2>
    <p>Ad Soyad: {{ order.name }}</p>
    <p>Adres: {{ order.address }}</p>
    <p>Ürünler:</p>
    <ul>
      <li *ngFor="let item of order.items">{{ item.name }} - {{ item.price }}</li>
    </ul>
  `,
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  order: any = {};

  constructor(
    private route: ActivatedRoute,
    private orderService: DetailsService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id).subscribe((order: any) => {
      this.order = order;
    });
  }
}
