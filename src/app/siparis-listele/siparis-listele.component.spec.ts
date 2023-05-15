import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiparisListeleComponent } from './siparis-listele.component';

describe('SiparisListeleComponent', () => {
  let component: SiparisListeleComponent;
  let fixture: ComponentFixture<SiparisListeleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiparisListeleComponent]
    });
    fixture = TestBed.createComponent(SiparisListeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
