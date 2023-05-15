import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunEklemeComponent } from './urun-ekleme.component';

describe('UrunEklemeComponent', () => {
  let component: UrunEklemeComponent;
  let fixture: ComponentFixture<UrunEklemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrunEklemeComponent]
    });
    fixture = TestBed.createComponent(UrunEklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
