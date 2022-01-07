import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { NetworkErrorsService } from "@app/core/services/network-errors.service";
import { Viewer } from "@app/core/services/viewer/viewer.service";
import { MutationState, MutatorWithState } from "@app/core/utilities/mutation-state-wrapper";
import { EvidenceStatus, Maybe, Organization, ModerateAssertionGQL, ModerateAssertionMutation, ModerateAssertionMutationVariables, ModerateEvidenceItemGQL, ModerateEvidenceItemMutation, ModerateEvidenceItemMutationVariables, SubscribableEntities, SubscribableInput, SubscribeGQL, SubscribeMutation, SubscribeMutationVariables, SubscriptionForEntityGQL, SubscriptionForEntityQuery, SubscriptionForEntityQueryVariables, SubscriptionIdFragment, UnsubscribeGQL, UnsubscribeMutation, UnsubscribeMutationVariables } from "@app/generated/civic.apollo";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'cvc-moderate-entity-buttons',
  templateUrl: './moderate-entity-buttons.component.html',
  styleUrls: ['./moderate-entity-buttons.component.less']
})
export class CvcModerateEntityButtonsComponent implements OnInit, OnDestroy {
  @Input() viewer!: Viewer
  @Input() entityType!: 'EvidenceItem' | 'Assertion'
  @Input() entityId!: number

  @Output() onModerated = new EventEmitter<EvidenceStatus | string[]>()

  moderateEvidenceMutator: MutatorWithState<ModerateEvidenceItemGQL, ModerateEvidenceItemMutation, ModerateEvidenceItemMutationVariables>
  moderateAssertionMutator: MutatorWithState<ModerateAssertionGQL, ModerateAssertionMutation, ModerateAssertionMutationVariables>

  evidenceStatuses = EvidenceStatus

  isSubmitting = false
  showConfirm = false

  mostRecentOrg: Maybe<Organization>

  destroy$ = new Subject<void>()
  
  constructor(private revertEvidenceGQL: ModerateEvidenceItemGQL, private  revertAssertionGQL: ModerateAssertionGQL, private networkErrorService: NetworkErrorsService) {
    this.moderateAssertionMutator = new MutatorWithState(networkErrorService);
    this.moderateEvidenceMutator = new MutatorWithState(networkErrorService);
  }

  moderate(newStatus: EvidenceStatus) {
    this.isSubmitting = true
    let state: MutationState
    
    if(this.entityType === "EvidenceItem") {
      state = this.moderateEvidenceMutator.mutate(this.revertEvidenceGQL, {
        input: {
          evidenceItemId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: newStatus
        }
      }) ;
    } else {
      state = this.moderateAssertionMutator.mutate(this.revertAssertionGQL, {
        input: {
          assertionId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: newStatus
        }
      }) ;
    }

    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if(res) {
        this.isSubmitting = false;
        this.showConfirm = false;
        this.onModerated.emit(newStatus);
      }
    })

    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
      if(errs) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onModerated.emit(errs)
      }
    })

    state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.isSubmitting = loading
    })


  }

  ngOnInit() {
    if(this.viewer === undefined) {
      throw new Error("Must pass in a viewer to the CvcEntitySubscriptionButtonComponent")
    }
    if(this.entityId === undefined) {
      throw new Error("Must pass in an id to the CvcEntitySubscriptionButtonComponent")
    }
    if(this.entityType === undefined) {
      throw new Error("Must pass in an entityType to the CvcEntitySubscriptionButtonComponent")
    }

    this.mostRecentOrg = this.viewer.mostRecentOrg;
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
