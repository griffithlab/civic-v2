import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
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
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs-etc/dist/esm/operators'

@UntilDestroy()
@Component({
    selector: 'cvc-moderate-entity-buttons',
    templateUrl: './moderate-entity-buttons.component.html',
    styleUrls: ['./moderate-entity-buttons.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcModerateEntityButtonsComponent implements OnInit, OnChanges {
  @Input() entityType!: 'EvidenceItem' | 'Assertion'
  @Input() entityId!: number

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
  viewer$: Observable<Viewer>
  constructor(
    private revertEvidenceGQL: ModerateEvidenceItemGQL,
    private revertAssertionGQL: ModerateAssertionGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService
  ) {
    this.moderateAssertionMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.moderateEvidenceMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.viewer$ = this.viewerService.viewer$
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.viewer) {
      console.log('*** viewer updated ***', changes.viewer.currentValue)
    }
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
