import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiparisVerService {

  private ordersUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  createOrder(order: any) {
    return this.http.post(this.ordersUrl, order);
  }
}
