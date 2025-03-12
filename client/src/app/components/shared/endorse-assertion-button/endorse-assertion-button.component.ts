import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  EndorseAssertionGQL,
  EndorseAssertionMutationVariables,
  EndorseAssertionMutation,
  ViewerOrganizationFragment,
  RevokeEndorsementGQL,
  RevokeEndorsementMutation,
  RevokeEndorsementMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { Observable, Subject } from 'rxjs'
import { pluck } from 'rxjs-etc/dist/esm/operators'

export type EndorsementMode = 'endorse' | 'revoke'
export type EndorsementResult = {
  action: EndorsementMode
  success: boolean
  errors: string[]
}

@UntilDestroy()
@Component({
  selector: 'cvc-endorse-assertion-button',
  templateUrl: './endorse-assertion-button.component.html',
  styleUrls: ['./endorse-assertion-button.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzModalModule,
    NzSpinModule,
    NzSpaceModule,
    NzDividerModule,
  ],
})
export class CvcEndorseAssertionButtonComponent implements OnInit {
  @Input() assertionId!: number
  @Input() mode!: EndorsementMode

  @Output() onEndorsed = new EventEmitter<EndorsementResult>()

  endorseAssertionMutator: MutatorWithState<
    EndorseAssertionGQL,
    EndorseAssertionMutation,
    EndorseAssertionMutationVariables
  >

  revokeAssertionMutator: MutatorWithState<
    RevokeEndorsementGQL,
    RevokeEndorsementMutation,
    RevokeEndorsementMutationVariables
  >

  isSubmitting = false
  showConfirm = false
  showRevokeConfirm = false

  mostRecentOrg: Maybe<ViewerOrganizationFragment>

  destroy$ = new Subject<void>()
  viewer$: Observable<Viewer>
  constructor(
    private endorseAssertionGql: EndorseAssertionGQL,
    private revokeEndorsementGql: RevokeEndorsementGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService
  ) {
    this.endorseAssertionMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.revokeAssertionMutator = new MutatorWithState(this.networkErrorService)

    this.viewer$ = this.viewerService.viewer$
  }

  perform() {
    this.isSubmitting = true
    let state: MutationState

    if (this.mode === 'endorse') {
      state = this.endorseAssertionMutator.mutate(this.endorseAssertionGql, {
        input: {
          assertionId: this.assertionId,
          organizationId: this.mostRecentOrg?.id,
        },
      })
    } else {
      state = this.revokeAssertionMutator.mutate(this.revokeEndorsementGql, {
        input: {
          assertionId: this.assertionId,
          organizationId: this.mostRecentOrg?.id,
        },
      })
    }

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res) {
        this.isSubmitting = false
        this.showConfirm = false
        this.showRevokeConfirm = false
        this.onEndorsed.emit({
          action: this.mode,
          success: true,
          errors: [],
        })
      }
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      if (errs) {
        this.isSubmitting = false
        this.showConfirm = false
        this.showRevokeConfirm = false
        this.onEndorsed.emit({
          action: this.mode,
          success: false,
          errors: errs,
        })
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting = loading
    })
  }

  handleConfirmModalCancel() {
    this.showConfirm = false
    this.showRevokeConfirm = false
  }

  ngOnInit() {
    if (this.assertionId === undefined) {
      throw new Error(
        'Must pass in an assertion id to the CvcEndorseAssertionButtonComponent'
      )
    }
    if (this.mode === undefined) {
      throw new Error(
        'Must pass in a mode to the CvcEndorseAssertionButtonComponent'
      )
    }

    this.viewer$
      .pipe(pluck('mostRecentOrg'), untilDestroyed(this))
      .subscribe((org) => (this.mostRecentOrg = org))
  }
}
