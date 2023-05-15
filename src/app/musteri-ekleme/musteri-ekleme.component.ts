import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-musteri-ekleme',
  template: `
  <form (ngSubmit)="onSubmit()">
    <input type="text" [(ngModel)]="customer.name" name="name" placeholder="Adı">
    <input type="text" [(ngModel)]="customer.email" name="email" placeholder="E-Posta">
    <input type="text" [(ngModel)]="customer.phone" name="phone" placeholder="Telefon">
    <button type="submit">Ekle</button>
  </form>
`,
  styleUrls: ['./musteri-ekleme.component.css']
})
export class MusteriEklemeComponent {
  customer = { name: '', email: '', phone: '' };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/customers', this.customer).subscribe(() => {
      console.log('Müşteri başarıyla eklendi.');
    });
  }
}
