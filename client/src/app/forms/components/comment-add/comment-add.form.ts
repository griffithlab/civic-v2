import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core'

import { Subject } from 'rxjs'

import { takeUntil } from 'rxjs/operators'

import {
  Organization,
  CommentableInput,
  Maybe,
  AddCommentGQL,
  AddCommentMutation,
  AddCommentMutationVariables,
} from '@app/generated/civic.apollo'

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
    selector: 'cvc-comment-add-form',
    templateUrl: './comment-add.form.html',
    styleUrls: ['./comment-add.form.less'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CvcCommentAddForm {
  @Input() subject!: CommentableInput
  @Output() commentAddedEvent = new EventEmitter<void>()

  mostRecentOrg!: Maybe<Organization>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  addCommentMutator: MutatorWithState<
    AddCommentGQL,
    AddCommentMutation,
    AddCommentMutationVariables
  >

  commentText?: string
  constructor(
    private viewerService: ViewerService,
    private addCommentGql: AddCommentGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(untilDestroyed(this))
      .subscribe((v: Viewer) => {
        this.mostRecentOrg = v.mostRecentOrg
      })

    this.addCommentMutator = new MutatorWithState(this.networkErrorService)
  }

  submitComment(): void {
    if (this.commentText) {
      this.errorMessages = []
      let newCommentInput = {
        body: this.commentText,
        subject: this.subject,
        organizationId:
          this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id,
      }

      let state = this.addCommentMutator.mutate(this.addCommentGql, {
        input: newCommentInput,
      })

      state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
        if (res) {
          this.resetForm()
          this.success = true
        }
      })

      state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  resetForm(): void {
    this.commentText = ''
    this.commentAddedEvent.emit()
  }

  onSuccessBannerClose() {
    this.resetForm()
  }
}
