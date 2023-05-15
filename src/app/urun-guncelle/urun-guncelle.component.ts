import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { GuncelleService } from './guncelle.service';

@Component({
  selector: 'app-urun-guncelle',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="product.name" name="name" placeholder="Adı">
      <input type="text" [(ngModel)]="product.price" name="price" placeholder="Fiyatı">
      <input type="text" [(ngModel)]="product.description" name="description" placeholder="Açıklama">
      <button type="submit">Güncelle</button>
    </form>
  `,
  styleUrls: ['./urun-guncelle.component.css']
})
export class UrunGuncelleComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: GuncelleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }
}
