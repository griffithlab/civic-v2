import { TestBed } from '@angular/core/testing';

import { RxjsSpy.ServiceService } from './rxjs-spy.service.service';

describe('RxjsSpy.ServiceService', () => {
  let service: RxjsSpy.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsSpy.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
