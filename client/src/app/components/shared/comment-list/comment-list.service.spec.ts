import { TestBed } from '@angular/core/testing';

import { CommentListService } from './comment-list.service';

describe('CommentListService', () => {
  let service: CommentListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
