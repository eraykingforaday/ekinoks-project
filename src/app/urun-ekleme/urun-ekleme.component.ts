import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-urun-ekleme',
  template: `
  <form (ngSubmit)="onSubmit()">
    <input type="text" [(ngModel)]="product.name" name="name" placeholder="Adı">
    <input type="text" [(ngModel)]="product.price" name="price" placeholder="Fiyatı">
    <input type="text" [(ngModel)]="product.description" name="description" placeholder="Açıklama">
    <button type="submit">Ekle</button>
  </form>
`,
  styleUrls: ['./urun-ekleme.component.css']
})
export class UrunEklemeComponent {
  product = { name: '', price: '', description: '' };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/products', this.product).subscribe(() => {
      console.log('Ürün başarıyla eklendi.');
    });
  }
}
