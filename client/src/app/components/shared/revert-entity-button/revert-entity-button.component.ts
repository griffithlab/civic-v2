import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  EvidenceStatus,
  Maybe,
  Organization,
  ModerateAssertionGQL,
  ModerateAssertionMutation,
  ModerateAssertionMutationVariables,
  ModerateEvidenceItemGQL,
  ModerateEvidenceItemMutation,
  ModerateEvidenceItemMutationVariables,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable, Subject } from 'rxjs'
import { pluck } from 'rxjs-etc/dist/esm/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-revert-entity-button',
  templateUrl: './revert-entity-button.component.html',
  styleUrls: ['./revert-entity-button.component.less'],
  standalone: false,
})
export class CvcRevertEntityButtonComponent implements OnInit {
  @Input() entityType!: 'EvidenceItem' | 'Assertion'
  @Input() entityId!: number

  @Output() onReverted = new EventEmitter<true | string[]>()

  revertEvidenceMutator: MutatorWithState<
    ModerateEvidenceItemGQL,
    ModerateEvidenceItemMutation,
    ModerateEvidenceItemMutationVariables
  >
  revertAssertionMutator: MutatorWithState<
    ModerateAssertionGQL,
    ModerateAssertionMutation,
    ModerateAssertionMutationVariables
  >

  isSubmitting = false
  showConfirm = false

  mostRecentOrg: Maybe<ViewerOrganizationFragment>

  destroy$ = new Subject<void>()
  viewer$: Observable<Viewer>
  constructor(
    private revertEvidenceGQL: ModerateEvidenceItemGQL,
    private revertAssertionGQL: ModerateAssertionGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService
  ) {
    this.revertAssertionMutator = new MutatorWithState(this.networkErrorService)
    this.revertEvidenceMutator = new MutatorWithState(this.networkErrorService)
    this.viewer$ = this.viewerService.viewer$
  }

  revert() {
    this.isSubmitting = true
    let state: MutationState

    if (this.entityType === 'EvidenceItem') {
      state = this.revertEvidenceMutator.mutate(this.revertEvidenceGQL, {
        input: {
          evidenceItemId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: EvidenceStatus.Submitted,
        },
      })
    } else {
      state = this.revertAssertionMutator.mutate(this.revertAssertionGQL, {
        input: {
          assertionId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: EvidenceStatus.Submitted,
        },
      })
    }

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onReverted.emit(true)
      }
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      if (errs) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onReverted.emit(errs)
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting = loading
    })
  }

  handleConfirmModalCancel() {
    this.showConfirm = false
  }

  ngOnInit() {
    if (this.entityId === undefined) {
      throw new Error(
        'Must pass in an id to the CvcEntitySubscriptionButtonComponent'
      )
    }
    if (this.entityType === undefined) {
      throw new Error(
        'Must pass in an entityType to the CvcEntitySubscriptionButtonComponent'
      )
    }

    this.viewer$
      .pipe(pluck('mostRecentOrg'), untilDestroyed(this))
      .subscribe((org) => (this.mostRecentOrg = org))
  }
}
