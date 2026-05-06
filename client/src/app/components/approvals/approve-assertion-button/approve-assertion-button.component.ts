import { CommonModule } from '@angular/common'
import {
  Component,
  computed,
  input,
  output,
  Signal,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  AssertionDetailGQL,
  ApproveAssertionGQL,
  ApproveAssertionMutation,
  ApproveAssertionMutationVariables,
  ApprovalListGQL,
  Maybe,
  RevokeApprovalGQL,
  RevokeApprovalMutation,
  RevokeApprovalMutationVariables,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzButtonModule, NzButtonType } from 'ng-zorro-antd/button'
import { NzSizeLDSType } from 'ng-zorro-antd/core/types'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

export type ApprovalMode = 'approve' | 'revoke' | 'approveChanges'
export type ApprovalResult = {
  action: ApprovalMode
  success: boolean
  errors: string[]
}

type ButtonConfig = {
  label: string
  icon: string
  size: NzSizeLDSType
  display: 'inline' | 'block'
  disabled: boolean
  danger: boolean
  tooltipText: Maybe<string>
  type: NzButtonType
}

@UntilDestroy()
@Component({
  selector: 'cvc-approve-assertion-button',
  templateUrl: './approve-assertion-button.component.html',
  styleUrls: ['./approve-assertion-button.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzModalModule,
    NzSpinModule,
    NzSpaceModule,
    NzDividerModule,
  ],
})
export class CvcApproveAssertionButtonComponent {
  @ViewChild('approveModalContent') approveModalContent!: TemplateRef<any>
  @ViewChild('revokeModalContent') revokeModalContent!: TemplateRef<any>
  @ViewChild('approveChangesModalContent')
  approveChangesModalContent!: TemplateRef<any>
  @ViewChild('modalTitle') modalTitle!: TemplateRef<any>
  @ViewChild('modalFooter') modalFooter!: TemplateRef<any>

  assertionId = input.required<number>()
  mode = input.required<ApprovalMode>()

  size = input<NzSizeLDSType>('small')
  type = input<NzButtonType>('default')
  display = input<'inline' | 'block'>('inline')
  disabled = input<boolean>(false)
  tooltipText = input<Maybe<string>>()
  onApproved = output<ApprovalResult>()

  viewer: Signal<Maybe<Viewer>>
  mostRecentOrg: Signal<Maybe<ViewerOrganizationFragment>>
  isSubmitting = signal(false)
  revocationComment = signal<Maybe<string>>(undefined)

  buttonConfig: Signal<Maybe<ButtonConfig>>

  approveAssertionMutator: MutatorWithState<
    ApproveAssertionGQL,
    ApproveAssertionMutation,
    ApproveAssertionMutationVariables
  >

  revokeApprovalMutator: MutatorWithState<
    RevokeApprovalGQL,
    RevokeApprovalMutation,
    RevokeApprovalMutationVariables
  >

  constructor(
    private approveAssertionGql: ApproveAssertionGQL,
    private revokeApprovalGql: RevokeApprovalGQL,
    private assertionDetailGql: AssertionDetailGQL,
    private approvalListGql: ApprovalListGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService,
    private modal: NzModalService
  ) {
    this.viewer = toSignal(this.viewerService.viewer$)
    this.mostRecentOrg = computed(() => {
      return this.viewer()?.mostRecentOrg
    })
    this.approveAssertionMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.revokeApprovalMutator = new MutatorWithState(this.networkErrorService)

    this.buttonConfig = computed(() => {
      return this.mode() ? this.getButtonConfig() : undefined
    })
  }

  getButtonConfig() {
    const configBase: Partial<ButtonConfig> = {
      size: this.size(),
      type: this.type(),
      display: this.display(),
      disabled: this.disabled(),
      danger: false,
      tooltipText: this.tooltipText(),
    }
    switch (this.mode()) {
      case 'approve':
        return {
          ...configBase,
          label: 'Approve',
          icon: 'safety-certificate',
        } as ButtonConfig
      case 'revoke':
        return {
          ...configBase,
          label: 'Revoke',
          icon: 'stop',
          type: 'primary',
          danger: true,
        } as ButtonConfig
      case 'approveChanges':
        return {
          ...configBase,
          label: 'Approve',
          icon: 'safety-certificate',
          type: 'primary',
        } as ButtonConfig
      default:
        return undefined
    }
  }

  createModal() {
    const mode = this.mode()
    const modalBase = {
      nzTitle: this.modalTitle,
      nzFooter: this.modalFooter,
    }
    if (mode === 'approve') {
      this.modal.create({
        ...modalBase,
        nzContent: this.approveModalContent,
      })
    } else if (mode === 'revoke') {
      this.modal.create({
        ...modalBase,
        nzContent: this.revokeModalContent,
      })
    } else if (mode === 'approveChanges') {
      this.modal.create({
        ...modalBase,
        nzContent: this.approveChangesModalContent,
      })
    }
  }

  perform() {
    this.isSubmitting.set(true)
    let state: MutationState

    let mutationOptions = {
      refetchQueries: [
        {
          query: this.assertionDetailGql.document,
          variables: { assertionId: this.assertionId() },
        },
        {
          query: this.approvalListGql.document,
          variables: { assertionId: this.assertionId() },
        },
      ],
    }

    if (this.mode() === 'approve' || this.mode() === 'approveChanges') {
      state = this.approveAssertionMutator.mutate(
        this.approveAssertionGql,
        {
          input: {
            assertionId: this.assertionId(),
            organizationId: this.mostRecentOrg()?.id,
          },
        },
        mutationOptions
      )
    } else {
      state = this.revokeApprovalMutator.mutate(
        this.revokeApprovalGql,
        {
          input: {
            assertionId: this.assertionId(),
            organizationId: this.mostRecentOrg()?.id,
            comment: this.revocationComment() || '',
          },
        },
        mutationOptions
      )
    }

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res) {
        this.isSubmitting.set(false)
        this.onApproved.emit({
          action: this.mode(),
          success: true,
          errors: [],
        })
        this.modal.closeAll()
      }
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      if (errs.length > 0) {
        this.isSubmitting.set(false)
        this.onApproved.emit({
          action: this.mode(),
          success: false,
          errors: errs,
        })
        this.modal.closeAll()
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting.set(loading)
    })
  }
}
