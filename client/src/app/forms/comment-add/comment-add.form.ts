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

@Component({
  selector: 'cvc-comment-add-form',
  templateUrl: './comment-add.form.html',
  styleUrls: ['./comment-add.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CvcCommentAddForm implements OnDestroy {
  @Input() subject!: CommentableInput
  @Output() commentAddedEvent = new EventEmitter<void>()

  private destroy$ = new Subject<void>()
  organizations!: Array<Organization>
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
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations
        this.mostRecentOrg = v.mostRecentOrg
      })

    this.addCommentMutator = new MutatorWithState(networkErrorService)
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org
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

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.resetForm()
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
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

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
