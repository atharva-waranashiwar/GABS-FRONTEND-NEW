import { TestBed } from '@angular/core/testing';

import { AuthServicveService } from './auth-servicve.service';

describe('AuthServicveService', () => {
  let service: AuthServicveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
