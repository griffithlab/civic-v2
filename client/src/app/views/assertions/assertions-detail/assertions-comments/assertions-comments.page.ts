import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
  AssertionSubmissionActivityFragmentDoc,
  CommentListNodeFragment,
} from '@app/generated/civic.apollo'
import { Apollo } from 'apollo-angular'

@Component({
  selector: 'cvc-assertions-comments',
  templateUrl: './assertions-comments.page.html',
  styleUrls: ['./assertions-comments.page.less'],
})
export class AssertionsCommentsPage implements OnInit {
  commentable: CommentableInput
  submissionComment?: CommentListNodeFragment

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
  ) {
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
      fragmentName: 'assertionSubmissionActivity',
    }
    try {
      const entity = this.apollo.client.readFragment(fragment) as any
      this.submissionComment = {
        id: 99999,
        __typename: 'Comment',
        comment: '',
        deleted: false,
        createdAt: entity.submissionActivity.createdAt,
        parsedComment: entity.submissionActivity.parsedNote,
        commenter: entity.submissionActivity.user,
      }
    } catch (err) {
      console.log(err)
    }
  }
}
