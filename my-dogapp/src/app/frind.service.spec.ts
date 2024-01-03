import { TestBed } from '@angular/core/testing';

import { FrindService } from './frind.service';

describe('FrindService', () => {
  let service: FrindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
