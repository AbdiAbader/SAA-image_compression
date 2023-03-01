import { TestBed } from '@angular/core/testing';

import { SendserviceService } from './sendservice.service';

describe('SendserviceService', () => {
  let service: SendserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
