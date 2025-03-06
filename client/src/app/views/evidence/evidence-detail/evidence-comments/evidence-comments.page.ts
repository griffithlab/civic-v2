import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
  CommentListNodeFragment,
  EvidenceSubmissionActivityFragmentDoc,
} from '@app/generated/civic.apollo'
import { Apollo } from 'apollo-angular'

@Component({
    selector: 'cvc-evidence-comments',
    templateUrl: './evidence-comments.page.html',
    styleUrls: ['./evidence-comments.page.less'],
    standalone: false
})
export class EvidenceCommentsPage implements OnInit {
  commentable: CommentableInput
  submissionComment?: CommentListNodeFragment

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
  ) {
    const evidenceId: number = +this.route.snapshot.params['evidenceId']

    this.commentable = {
      id: evidenceId,
      entityType: CommentableEntities.EvidenceItem,
    }
  }

  ngOnInit() {
    const fragment = {
      id: `EvidenceItem:${this.commentable.id}`,
      fragment: EvidenceSubmissionActivityFragmentDoc,
      fragmentName: 'evidenceSubmissionActivity',
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
