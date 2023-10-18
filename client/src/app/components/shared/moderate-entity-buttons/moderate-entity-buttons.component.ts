import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject } from 'rxjs'

@UntilDestroy()
@Component({
  selector: 'cvc-moderate-entity-buttons',
  templateUrl: './moderate-entity-buttons.component.html',
  styleUrls: ['./moderate-entity-buttons.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcModerateEntityButtonsComponent implements OnInit {
  @Input() viewer!: Viewer
  @Input() entityType!: 'EvidenceItem' | 'Assertion'
  @Input() entityId!: number
  @Input() rejectOnly: boolean = false

  @Output() onModerated = new EventEmitter<EvidenceStatus | string[]>()

  moderateEvidenceMutator: MutatorWithState<
    ModerateEvidenceItemGQL,
    ModerateEvidenceItemMutation,
    ModerateEvidenceItemMutationVariables
  >
  moderateAssertionMutator: MutatorWithState<
    ModerateAssertionGQL,
    ModerateAssertionMutation,
    ModerateAssertionMutationVariables
  >

  evidenceStatuses = EvidenceStatus

  isSubmitting = false
  showConfirm = false

  mostRecentOrg: Maybe<Organization>
  mostRecentOrg$: BehaviorSubject<Maybe<Organization>>
  constructor(
    private revertEvidenceGQL: ModerateEvidenceItemGQL,
    private revertAssertionGQL: ModerateAssertionGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.moderateAssertionMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.moderateEvidenceMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.mostRecentOrg$ = new BehaviorSubject<Maybe<Organization>>(undefined)
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

  moderate(newStatus: EvidenceStatus) {
    this.isSubmitting = true
    let state: MutationState

    if (this.entityType === 'EvidenceItem') {
      state = this.moderateEvidenceMutator.mutate(this.revertEvidenceGQL, {
        input: {
          evidenceItemId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: newStatus,
        },
      })
    } else {
      state = this.moderateAssertionMutator.mutate(this.revertAssertionGQL, {
        input: {
          assertionId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: newStatus,
        },
      })
    }

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onModerated.emit(newStatus)
      }
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      if (errs) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onModerated.emit(errs)
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting = loading
    })
  }
}
