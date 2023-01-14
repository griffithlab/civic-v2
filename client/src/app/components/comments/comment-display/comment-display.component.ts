import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-comment-display',
  templateUrl: './comment-display.component.html',
})
export class CvcCommentDisplayComponent implements OnInit {
  @Input() comment!: Comment;

  ngOnInit() {
    if (this.comment === undefined) {
      throw new Error('Must pass a comment into comment display component.');
    }
  }
}
