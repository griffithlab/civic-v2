import { Component, OnDestroy, signal, WritableSignal } from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  ApiKey,
  ApiKeysGQL,
  GenerateApiKeyGQL,
  GenerateApiKeyInput,
  GenerateApiKeyMutation,
  GenerateApiKeyMutationVariables,
  Maybe,
  RevokeApiKeyGQL,
  RevokeApiKeyInput,
  RevokeApiKeyMutation,
  RevokeApiKeyMutationVariables,
} from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcFormErrorsAlertModule } from '@app/forms/components/form-errors-alert/form-errors-alert.module'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzButtonModule } from 'ng-zorro-antd/button'

import { Subject } from 'rxjs'
import { filter, takeUntil } from 'rxjs/operators'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { isNonNulled } from 'rxjs-etc'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'

@Component({
    imports: [
        CommonModule,
        FormsModule,
        NzFormModule,
        ReactiveFormsModule,
        NzCardModule,
        NzAlertModule,
        NzRadioModule,
        NzButtonModule,
        NzSpinModule,
        NzListModule,
        NzTypographyModule,
        NzIconModule,
        NzToolTipModule,
        NzMessageModule,
        CvcFormErrorsAlertModule,
    ],
    selector: 'cvc-user-api-keys-form',
    templateUrl: './user-api-keys.form.html',
    styleUrls: ['./user-api-keys.form.less']
})
export class CvcUserApiKeysForm implements OnDestroy {
  success: boolean = false
  errorMessages: string[] = []
  successMessage: string = ''
  loading: boolean = false

  private destroy$ = new Subject<void>()

  apiKeys: WritableSignal<ApiKey[]> = signal([])
  newApiKey: WritableSignal<Maybe<ApiKey>> = signal(undefined)

  revokeApiKeyMutator: MutatorWithState<
    RevokeApiKeyGQL,
    RevokeApiKeyMutation,
    RevokeApiKeyMutationVariables
  >

  generateApiKeyMutator: MutatorWithState<
    GenerateApiKeyGQL,
    GenerateApiKeyMutation,
    GenerateApiKeyMutationVariables
  >

  constructor(
    private generateApiKeyGql: GenerateApiKeyGQL,
    private revokeApiKeyGql: RevokeApiKeyGQL,
    private apiKeysGql: ApiKeysGQL,
    private message: NzMessageService,
    networkErrorService: NetworkErrorsService
  ) {
    this.generateApiKeyMutator = new MutatorWithState(networkErrorService)
    this.revokeApiKeyMutator = new MutatorWithState(networkErrorService)
    apiKeysGql
      .watch()
      .valueChanges.pipe(filter(isNonNulled), takeUntil(this.destroy$))
      .subscribe(({ data }) => {
        if (data?.viewer?.apiKeys) {
          this.apiKeys.set(data.viewer.apiKeys)
        }
      })
  }

  revokeKey(id: number) {
    let input: RevokeApiKeyInput = {
      id: id,
    }

    let state = this.revokeApiKeyMutator.mutate(
      this.revokeApiKeyGql,
      { input: input },
      { refetchQueries: [{ query: this.apiKeysGql.document }] }
    )
    this.manageState(state, 'API Key Revoked Successfully')
  }

  generateKey() {
    let input: GenerateApiKeyInput = {}

    let state = this.generateApiKeyMutator.mutate(
      this.generateApiKeyGql,
      { input: input },
      {},
      (data) => {
        this.newApiKey.set(data.generateApiKey?.apiKey)
      }
    )

    this.manageState(
      state,
      'API Key Created. Store It Somewhere Safe, You Will Not Be Able To See It Again'
    )
  }

  copyKey(key?: string) {
    if (key) {
      navigator.clipboard.writeText(key)
      this.message.info('Copied')
    }
  }

  manageState(state: MutationState, message: string) {
    this.errorMessages = []

    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.success = true
        this.successMessage = message
      }
    })

    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
      if (errs) {
        this.errorMessages = errs
        this.success = false
        this.successMessage = ''
      }
    })

    state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.loading = loading
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
