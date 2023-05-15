import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusteriEklemeComponent } from './musteri-ekleme/musteri-ekleme.component';
import { UrunEklemeComponent } from './urun-ekleme/urun-ekleme.component';
import { UrunGuncelleComponent } from './urun-guncelle/urun-guncelle.component';

@NgModule({
  declarations: [
    AppComponent,
    MusteriEklemeComponent,
    UrunEklemeComponent,
    UrunGuncelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
