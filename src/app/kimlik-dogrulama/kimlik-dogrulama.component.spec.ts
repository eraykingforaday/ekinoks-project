import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimlikDogrulamaComponent } from './kimlik-dogrulama.component';

describe('KimlikDogrulamaComponent', () => {
  let component: KimlikDogrulamaComponent;
  let fixture: ComponentFixture<KimlikDogrulamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KimlikDogrulamaComponent]
    });
    fixture = TestBed.createComponent(KimlikDogrulamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
