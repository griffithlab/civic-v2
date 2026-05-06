import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  assertionReviseFormInitialModel,
  AssertionReviseModel,
} from '@app/forms/models/assertion-revise.model'
import { AssertionState } from '@app/forms/states/assertion.state'
import {
  AssertionRevisableFieldsGQL,
  Maybe,
  SuggestAssertionRevisionGQL,
  SuggestAssertionRevisionMutation,
  SuggestAssertionRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { assertionReviseFields } from './assertion-revise.form.config'
import {
  assertionFormModelToReviseInput,
  assertionToModelFields,
} from '@app/forms/utilities/assertion-to-model-fields'

@UntilDestroy()
@Component({
    selector: 'cvc-assertion-revise-form',
    templateUrl: './assertion-revise.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcAssertionReviseForm
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() assertionId!: number

  model?: AssertionReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: AssertionState
  options: FormlyFormOptions

  url?: string

  reviseAssertionMutator: MutatorWithState<
    SuggestAssertionRevisionGQL,
    SuggestAssertionRevisionMutation,
    SuggestAssertionRevisionMutationVariables
  >

  mutationState?: MutationState

  constructor(
    private revisableFieldsGQL: AssertionRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestAssertionRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = assertionReviseFields
    this.state = new AssertionState()
    this.state.formMode = 'revise'
    this.options = { formState: this.state }
    this.reviseAssertionMutator = new MutatorWithState(networkErrorService)
  }

  onSubmit(model: AssertionReviseModel) {
    if (!this.assertionId) {
      return
    }
    let input = assertionFormModelToReviseInput(this.assertionId, model)
    if (input) {
      this.mutationState = this.reviseAssertionMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }

  ngOnInit(): void {
    this.url = `/assertions/${this.assertionId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ assertionId: this.assertionId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { assertion } }) => {
          if (assertion) {
            this.model = {
              id: assertion.id,
              fields: assertionToModelFields(assertion),
            }
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.log('Error retrieving Assertion')
          console.log(error)
        },
        complete: () => {
          this.state.formReady$.next(true)
        },
      })
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}
