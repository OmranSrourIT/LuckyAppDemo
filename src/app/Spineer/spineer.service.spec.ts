import { TestBed } from '@angular/core/testing';

import { SpineerService } from './spineer.service';

describe('SpineerService', () => {
  let service: SpineerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpineerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
