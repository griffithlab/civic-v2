import { Component, Input, OnInit } from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  CommentBodySegment,
  DeleteCommentGQL,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'

export interface CommenterInterface {
  id: number
  displayName: string
  profileImagePath: Maybe<string>
}

export interface CommentInterface {
  id?: number
  createdAt: string | number
  parsedComment: CommentBodySegment[]
  commenter: CommenterInterface
  deleted?: boolean
}

@Component({
  selector: 'cvc-comment-display',
  templateUrl: './comment-display.component.html',
})
export class CvcCommentDisplayComponent implements OnInit {
  @Input() comment!: CommentInterface

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
