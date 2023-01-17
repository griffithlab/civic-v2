import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer } from '@app/core/services/viewer/viewer.service'
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
  SubscribableEntities,
  SubscribableInput,
  SubscribeGQL,
  SubscribeMutation,
  SubscribeMutationVariables,
  SubscriptionForEntityGQL,
  SubscriptionForEntityQuery,
  SubscriptionForEntityQueryVariables,
  SubscriptionIdFragment,
  UnsubscribeGQL,
  UnsubscribeMutation,
  UnsubscribeMutationVariables,
} from '@app/generated/civic.apollo'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'cvc-revert-entity-button',
  templateUrl: './revert-entity-button.component.html',
  styleUrls: ['./revert-entity-button.component.less'],
})
export class CvcRevertEntityButtonComponent implements OnInit, OnDestroy {
  @Input() viewer!: Viewer
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

  mostRecentOrg: Maybe<Organization>

  destroy$ = new Subject<void>()

  constructor(
    private revertEvidenceGQL: ModerateEvidenceItemGQL,
    private revertAssertionGQL: ModerateAssertionGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.revertAssertionMutator = new MutatorWithState(networkErrorService)
    this.revertEvidenceMutator = new MutatorWithState(networkErrorService)
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

    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onReverted.emit(true)
      }
    })

    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
      if (errs) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onReverted.emit(errs)
      }
    })

    state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.isSubmitting = loading
    })
  }

  handleConfirmModalCancel() {
    this.showConfirm = false
  }

  ngOnInit() {
    if (this.viewer === undefined) {
      throw new Error(
        'Must pass in a viewer to the CvcEntitySubscriptionButtonComponent'
      )
    }
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

    this.mostRecentOrg = this.viewer.mostRecentOrg
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
