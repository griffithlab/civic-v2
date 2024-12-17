import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  assertionSubmitFormInitialModel,
  AssertionSubmitModel,
} from '@app/forms/models/assertion-submit.model'
import { AssertionState } from '@app/forms/states/assertion.state'
import { assertionFormModelToInput } from '@app/forms/utilities/assertion-to-model-fields'
import {
  SubmitAssertionGQL,
  SubmitAssertionMutation,
  SubmitAssertionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { tag } from 'rxjs-spy/operators'
import { assertionSubmitFields } from './assertion-submit.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcAssertionSubmitForm implements AfterViewInit, OnDestroy {
  model: AssertionSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: AssertionState
  options: FormlyFormOptions

  submitAssertionMutator: MutatorWithState<
    SubmitAssertionGQL,
    SubmitAssertionMutation,
    SubmitAssertionMutationVariables
  >

  mutationState?: MutationState
  newAssertionId?: number
  newAssertionUrl?: string

  constructor(
    private submitAssertionGQL: SubmitAssertionGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.form = new UntypedFormGroup({})
    this.model = assertionSubmitFormInitialModel
    this.fields = assertionSubmitFields
    this.state = new AssertionState()
    this.options = { formState: this.state }

    this.submitAssertionMutator = new MutatorWithState(networkErrorService)
  }

  onSubmit(model: AssertionSubmitModel) {
    let input = assertionFormModelToInput(model)
    if (input) {
      this.mutationState = this.submitAssertionMutator.mutate(
        this.submitAssertionGQL,
        { input: input },
        undefined,
        (data) => {
          this.newAssertionId = data.submitAssertion?.assertion.id
          this.newAssertionUrl = `/assertions/${this.newAssertionId}/summary`
        }
      )
    }
  }

  ngAfterViewInit(): void {
    this.state.formReady$.next(true)
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}
