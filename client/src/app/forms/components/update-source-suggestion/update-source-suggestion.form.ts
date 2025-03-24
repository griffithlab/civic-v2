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
  Maybe,
  SourceSuggestionStatus,
  UpdateSourceSuggestionGQL,
  UpdateSourceSuggestionMutation,
  UpdateSourceSuggestionMutationVariables,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'

@Component({
  selector: 'cvc-update-source-suggestion-form',
  templateUrl: './update-source-suggestion.form.html',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class CvcUpdateSourceSuggestionForm implements OnDestroy {
  @Input() sourceSuggestionId!: number
  @Input() currentStatus!: SourceSuggestionStatus

  @Output() commentAddedEvent = new EventEmitter<void>()

  private destroy$ = new Subject<void>()
  organizations!: Array<ViewerOrganizationFragment>
  mostRecentOrg!: Maybe<ViewerOrganizationFragment>

  reason?: string
  newStatus?: SourceSuggestionStatus

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  sourceSuggestionStatusMutator: MutatorWithState<
    UpdateSourceSuggestionGQL,
    UpdateSourceSuggestionMutation,
    UpdateSourceSuggestionMutationVariables
  >

  commentText?: string
  constructor(
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService,
    private updateSuggestionStatusGql: UpdateSourceSuggestionGQL
  ) {
    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.user?.organizations || []
        this.mostRecentOrg = v.mostRecentOrg
      })

    this.sourceSuggestionStatusMutator = new MutatorWithState(
      networkErrorService
    )
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org
  }

  updateSourceSuggestionStatus(): void {
    if (this.newStatus) {
      let state = this.sourceSuggestionStatusMutator.mutate(
        this.updateSuggestionStatusGql,
        {
          input: {
            id: this.sourceSuggestionId,
            newStatus: this.newStatus,
            reason: this.reason,
            organizationId: this.mostRecentOrg?.id,
          },
        }
      )

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        this.resetForm()
        this.success = true
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
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
  }

  onSuccessBannerClose() {
    this.resetForm()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
