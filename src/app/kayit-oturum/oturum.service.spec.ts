import { TestBed } from '@angular/core/testing';

import { OturumService } from './oturum.service';

describe('OturumService', () => {
  let service: OturumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OturumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
