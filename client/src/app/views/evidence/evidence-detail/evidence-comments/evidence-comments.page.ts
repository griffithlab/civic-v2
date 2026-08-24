import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CommentListNodeFragment } from '@app/components/comments/comment-list/comment-list.query.gql.generated'
import {
  CommentableEntities,
  CommentableInput,
} from '@app/generated/civic.apollo.types'
import { EvidenceSubmissionActivityFragmentDoc } from '@app/views/evidence/evidence-detail/evidence-detail.query.gql.generated'
import { Apollo } from 'apollo-angular'

@Component({
  selector: 'cvc-evidence-comments',
  templateUrl: './evidence-comments.page.html',
  styleUrls: ['./evidence-comments.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
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
