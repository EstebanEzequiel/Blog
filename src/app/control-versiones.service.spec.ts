import { TestBed } from '@angular/core/testing';

import { ControlVersionesService } from './control-versiones.service';

describe('ControlVersionesService', () => {
  let service: ControlVersionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlVersionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
