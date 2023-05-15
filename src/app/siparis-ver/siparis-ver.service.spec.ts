import { TestBed } from '@angular/core/testing';

import { SiparisVerService } from './siparis-ver.service';

describe('SiparisVerService', () => {
  let service: SiparisVerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiparisVerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
