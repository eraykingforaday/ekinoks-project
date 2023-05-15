import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private ordersUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  getOrder(id: number) {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.get(url);
  }
}
