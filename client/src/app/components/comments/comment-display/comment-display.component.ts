import {
  Component,
  OnInit,
  input,
  ChangeDetectionStrategy,
} from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  DeleteCommentGQL,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
} from './delete-comment.query.gql.generated'
import { CommentListNodeFragment } from '@app/components/comments/comment-list/comment-list.query.gql.generated'
import { Observable } from 'rxjs'

@Component({
  selector: 'cvc-comment-display',
  templateUrl: './comment-display.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcCommentDisplayComponent implements OnInit {
  comment = input.required<CommentListNodeFragment>()
  canDelete = input<boolean>(true)

  viewer$: Observable<Viewer>

  constructor(
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService,
    private deleteCommentGql: DeleteCommentGQL
  ) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit() {
    if (this.comment === undefined) {
      throw new Error('Must pass a comment into comment display component.')
    }
  }

  deleteComment(commentId: number, orgId?: number) {
    let mutator = new MutatorWithState<
      DeleteCommentGQL,
      DeleteCommentMutation,
      DeleteCommentMutationVariables
    >(this.networkErrorService)

    let deleteCommentInput = {
      commentId: commentId,
      organizationId: orgId,
    }

    mutator.mutate(this.deleteCommentGql, { input: deleteCommentInput })
  }
}
