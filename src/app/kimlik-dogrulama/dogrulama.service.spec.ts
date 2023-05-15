import { TestBed } from '@angular/core/testing';

import { DogrulamaService } from './dogrulama.service';

describe('DogrulamaService', () => {
  let service: DogrulamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogrulamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
