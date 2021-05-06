import { TestBed } from '@angular/core/testing';

import { GenesRevisionsService } from './genes-revisions.service';

describe('GenesRevisionsService', () => {
  let service: GenesRevisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenesRevisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
