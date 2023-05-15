import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriEklemeComponent } from './musteri-ekleme.component';

describe('MusteriEklemeComponent', () => {
  let component: MusteriEklemeComponent;
  let fixture: ComponentFixture<MusteriEklemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriEklemeComponent]
    });
    fixture = TestBed.createComponent(MusteriEklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
