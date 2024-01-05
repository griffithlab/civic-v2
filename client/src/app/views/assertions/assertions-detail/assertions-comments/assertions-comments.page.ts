import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
  AssertionSubmissionActivityFragmentDoc,
} from '@app/generated/civic.apollo'
import { Apollo } from 'apollo-angular'
import { CommentInterface } from '../../../../components/comments/comment-display/comment-display.component'

@Component({
  selector: 'cvc-assertions-comments',
  templateUrl: './assertions-comments.page.html',
  styleUrls: ['./assertions-comments.page.less'],
})
export class AssertionsCommentsPage implements OnInit {
  commentable: CommentableInput
  submissionComment?: CommentInterface

  constructor(private route: ActivatedRoute, private apollo: Apollo) {
    const assertionId: number = +this.route.snapshot.params['assertionId']
    this.commentable = {
      id: assertionId,
      entityType: CommentableEntities.Assertion,
    }
  }

  ngOnInit() {
    const fragment = {
      id: `Assertion:${this.commentable.id}`,
      fragment: AssertionSubmissionActivityFragmentDoc,
      fragmentName: 'assertionSubmissionActivity'
    }
    try {
      const entity = this.apollo.client.readFragment(fragment) as any;
      this.submissionComment = {
        createdAt: entity.submissionActivity.createdAt,
        parsedComment: entity.submissionActivity.parsedNote,
        commenter: entity.submissionActivity.user
      }
    } catch(err) {
      console.log(err)
    }
  }
}
