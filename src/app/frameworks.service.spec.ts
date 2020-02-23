import { TestBed } from '@angular/core/testing';

import { FrameworksService } from './frameworks.service';

describe('FrameworksService', () => {
  let service: FrameworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
