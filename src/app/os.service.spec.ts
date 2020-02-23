import { TestBed } from '@angular/core/testing';

import { OSService } from './os.service';

describe('OSService', () => {
  let service: OSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
