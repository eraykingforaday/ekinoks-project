import { TestBed } from '@angular/core/testing';

import { ListeleService } from './listele.service';

describe('ListeleService', () => {
  let service: ListeleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
