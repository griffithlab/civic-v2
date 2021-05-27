import { TestBed } from '@angular/core/testing';

import { GenesCommentsService } from './genes-comments.service';

describe('GenesCommentsService', () => {
  let service: GenesCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenesCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
