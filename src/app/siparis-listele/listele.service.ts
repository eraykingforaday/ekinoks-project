import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeleService {

  private ordersUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.ordersUrl);
  }
}
