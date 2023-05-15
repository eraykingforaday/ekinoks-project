import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitOturumComponent } from './kayit-oturum.component';

describe('KayitOturumComponent', () => {
  let component: KayitOturumComponent;
  let fixture: ComponentFixture<KayitOturumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KayitOturumComponent]
    });
    fixture = TestBed.createComponent(KayitOturumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
