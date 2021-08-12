import { TestBed } from '@angular/core/testing';

import { CommentAddService } from './comment-add.service';

describe('CommentAddService', () => {
  let service: CommentAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
