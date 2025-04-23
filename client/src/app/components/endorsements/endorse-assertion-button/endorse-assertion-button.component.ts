import { CommonModule } from '@angular/common'
import {
  Component,
  computed,
  input,
  output,
  Signal,
  signal,
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
  EndorseAssertionGQL,
  EndorseAssertionMutation,
  EndorseAssertionMutationVariables,
  EndorsementListGQL,
  Maybe,
  RevokeEndorsementGQL,
  RevokeEndorsementMutation,
  RevokeEndorsementMutationVariables,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzButtonModule, NzButtonType } from 'ng-zorro-antd/button'
import { NzSizeLDSType } from 'ng-zorro-antd/core/types'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { map } from 'rxjs'

export type EndorsementMode = 'endorse' | 'revoke' | 'endorseChanges'
export type EndorsementResult = {
  action: EndorsementMode
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
  tooltipText: string
  type: NzButtonType
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
export class CvcEndorseAssertionButtonComponent {
  assertionId = input.required<number>()
  mode = input.required<EndorsementMode>()

  size = input<NzSizeLDSType>('small')
  display = input<'inline' | 'block'>('inline')
  disabled = input<boolean>(false)
  tooltipText = input<Maybe<string>>()
  onEndorsed = output<EndorsementResult>()

  viewer: Signal<Maybe<Viewer>>
  mostRecentOrg: Signal<Maybe<ViewerOrganizationFragment>>
  isSubmitting = signal(false)
  showConfirm = signal(false)
  showRevokeConfirm = signal(false)
  revocationComment = signal<Maybe<string>>(undefined)

  buttonConfig: Signal<Maybe<ButtonConfig>>

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

  constructor(
    private endorseAssertionGql: EndorseAssertionGQL,
    private revokeEndorsementGql: RevokeEndorsementGQL,
    private assertionDetailGql: AssertionDetailGQL,
    private endorsementListGql: EndorsementListGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService
  ) {
    this.viewer = toSignal(this.viewerService.viewer$)
    this.mostRecentOrg = computed(() => {
      return this.viewer()?.mostRecentOrg
    })
    this.endorseAssertionMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.revokeAssertionMutator = new MutatorWithState(this.networkErrorService)

    this.buttonConfig = computed(() => {
      return this.mode() && this.viewer() ? this.getButtonConfig() : undefined
    })
  }

  getButtonConfig() {
    let config: ButtonConfig = {
      label: 'Endorse',
      icon: '',
      size: 'small',
      display: 'inline',
      disabled: false,
      danger: false,
      tooltipText: '',
      type: 'default',
    }
    return config
  }
  showForm() {
    console.log('showForm')
  }
  perform() {
    this.isSubmitting.set(true)
    let state: MutationState

    let mutationOptions = {
      refetchQueries: [
        {
          query: this.assertionDetailGql.document,
          variables: { id: this.assertionId },
        },
        {
          query: this.endorsementListGql.document,
          variables: { assertionId: this.assertionId },
        },
      ],
    }

    if (this.mode() === 'endorse') {
      state = this.endorseAssertionMutator.mutate(
        this.endorseAssertionGql,
        {
          input: {
            assertionId: this.assertionId(),
            organizationId: this.mostRecentOrg()?.id,
          },
        },
        mutationOptions
      )
    } else {
      state = this.revokeAssertionMutator.mutate(
        this.revokeEndorsementGql,
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
        this.showConfirm.set(false)
        this.showRevokeConfirm.set(false)
        this.onEndorsed.emit({
          action: this.mode(),
          success: true,
          errors: [],
        })
      }
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      if (errs) {
        this.isSubmitting.set(false)
        this.showConfirm.set(false)
        this.showRevokeConfirm.set(false)
        this.onEndorsed.emit({
          action: this.mode(),
          success: false,
          errors: errs,
        })
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting.set(loading)
    })
  }

  handleConfirmModalCancel() {
    this.showConfirm.set(false)
    this.showRevokeConfirm.set(false)
  }
}
