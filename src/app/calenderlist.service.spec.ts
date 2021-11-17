import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalenderlistService } from './calenderlist.service';

describe('CalenderlistService', () => {
  let service: CalenderlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
