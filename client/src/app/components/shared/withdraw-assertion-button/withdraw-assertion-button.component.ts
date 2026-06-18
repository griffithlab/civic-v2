import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  AssertionStatus,
  Maybe,
  ModerateAssertionGQL,
  ModerateAssertionMutation,
  ModerateAssertionMutationVariables,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs-etc/dist/esm/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-withdraw-assertion-button',
  templateUrl: './withdraw-assertion-button.component.html',
  styleUrls: ['./withdraw-assertion-button.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzModalModule,
    NzSpaceModule,
    NzSpinModule,
    NzToolTipModule,
    NzTypographyModule,
  ],
})
export class CvcWithdrawAssertionButtonComponent implements OnInit {
  @Input() assertionId!: number

  @Output() onWithdrawn = new EventEmitter<true | string[]>()

  withdrawAssertionMutator: MutatorWithState<
    ModerateAssertionGQL,
    ModerateAssertionMutation,
    ModerateAssertionMutationVariables
  >

  isSubmitting = false
  showConfirm = false
  withdrawComment?: string

  mostRecentOrg: Maybe<ViewerOrganizationFragment>
  viewer$: Observable<Viewer>

  constructor(
    private moderateAssertionGQL: ModerateAssertionGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService
  ) {
    this.withdrawAssertionMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit() {
    if (this.assertionId === undefined) {
      throw new Error('Must pass in an assertionId to CvcWithdrawAssertionButtonComponent')
    }

    this.viewer$
      .pipe(pluck('mostRecentOrg'), untilDestroyed(this))
      .subscribe((org) => (this.mostRecentOrg = org))
  }

  withdraw() {
    this.isSubmitting = true

    const state: MutationState = this.withdrawAssertionMutator.mutate(
      this.moderateAssertionGQL,
      {
        input: {
          assertionId: this.assertionId,
          organizationId: this.mostRecentOrg?.id,
          newStatus: AssertionStatus.Withdrawn,
          comment: this.withdrawComment,
        },
      }
    )

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onWithdrawn.emit(true)
      }
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      if (errs) {
        this.isSubmitting = false
        this.showConfirm = false
        this.onWithdrawn.emit(errs)
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting = loading
    })
  }

  handleConfirmModalCancel() {
    this.showConfirm = false
  }
}
