import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-assertions-comments',
  templateUrl: './assertions-comments.component.html',
  styleUrls: ['./assertions-comments.component.less'],
})
export class AssertionsCommentsComponent {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const assertionId: number = +this.route.snapshot.params['assertionId'];
    this.commentable = {
      id: assertionId,
      entityType: CommentableEntities.Assertion
    }
  }
}
