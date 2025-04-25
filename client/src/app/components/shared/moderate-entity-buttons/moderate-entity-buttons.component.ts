import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
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
import { NzModalService } from 'ng-zorro-antd/modal'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs-etc/dist/esm/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-moderate-entity-buttons',
  templateUrl: './moderate-entity-buttons.component.html',
  styleUrls: ['./moderate-entity-buttons.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcModerateEntityButtonsComponent implements OnInit {
  @Input() entityType!: 'EvidenceItem' | 'Assertion'
  @Input() entityId!: number

  @Output() onModerated = new EventEmitter<EvidenceStatus | string[]>()

  @ViewChild('confirmModal') modalContents!: TemplateRef<any>

  confirmationComment?: string
  entityTypeDisplay!: string

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
    private viewerService: ViewerService,
    private modal: NzModalService
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
    if (this.entityType === 'EvidenceItem') {
      this.entityTypeDisplay = 'Evidence Item'
    } else {
      this.entityTypeDisplay = 'Assertion'
    }
    this.viewer$
      .pipe(pluck('mostRecentOrg'), untilDestroyed(this))
      .subscribe((org) => (this.mostRecentOrg = org))
  }

  moderate(newStatus: EvidenceStatus) {
    const action = newStatus.replace(/ED$/, '')
    const actionName = action.charAt(0) + action.slice(1).toLowerCase()

    this.modal.confirm({
      nzTitle: `${actionName} This ${this.entityTypeDisplay}`,
      nzOkText: actionName,
      nzCancelText: 'Cancel',
      nzContent: this.modalContents,
      nzData: { action: actionName, organization: this.mostRecentOrg?.name },
      nzOnOk: () => {
        this.submit(newStatus)
      },
    })
  }

  submit(newStatus: EvidenceStatus) {
    this.isSubmitting = true
    let state: MutationState

    if (this.entityType === 'EvidenceItem') {
      state = this.moderateEvidenceMutator.mutate(this.revertEvidenceGQL, {
        input: {
          evidenceItemId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: newStatus,
          comment: this.confirmationComment,
        },
      })
    } else {
      state = this.moderateAssertionMutator.mutate(this.revertAssertionGQL, {
        input: {
          assertionId: this.entityId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: newStatus,
          comment: this.confirmationComment,
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
