import { TestBed } from '@angular/core/testing';

import { GeneSuggestRevisionService } from './gene-suggest-revision.service';

describe('GeneSuggestRevisionService', () => {
  let service: GeneSuggestRevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneSuggestRevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
