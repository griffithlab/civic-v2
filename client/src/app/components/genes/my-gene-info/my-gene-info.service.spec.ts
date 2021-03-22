import { TestBed } from '@angular/core/testing';

import { MyGeneInfoService } from './my-gene-info.service';

describe('MyGeneInfoService', () => {
  let service: MyGeneInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGeneInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
