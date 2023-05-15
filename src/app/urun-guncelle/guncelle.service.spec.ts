import { TestBed } from '@angular/core/testing';

import { GuncelleService } from './guncelle.service';

describe('GuncelleService', () => {
  let service: GuncelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuncelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
