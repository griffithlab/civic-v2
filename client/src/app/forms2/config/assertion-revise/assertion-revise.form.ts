import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { assertionReviseFormInitialModel, AssertionReviseModel } from '@app/forms2/models/assertion-revise.model'
import { AssertionState } from '@app/forms2/states/assertion.state'
import { AssertionRevisableFieldsGQL, Maybe, SuggestAssertionRevisionGQL, SuggestAssertionRevisionMutation, SuggestAssertionRevisionMutationVariables } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { assertionReviseFields } from './assertion-revise.form.config'
import { assertionToModelFields } from '@app/forms2/utilities/assertion-to-model-fields'

@UntilDestroy()
@Component({
  selector: 'cvc-assertion-revise-form',
  templateUrl: './assertion-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAssertionReviseForm implements AfterViewInit, OnDestroy {
  @Input() assertionId!: number

  model?: AssertionReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: AssertionState
  options: FormlyFormOptions

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
    this.options = { formState: this.state}
    this.reviseAssertionMutator = new MutatorWithState(networkErrorService)
  }

  onSubmit(model: AssertionReviseModel) {
    console.log('------ Assertion Form Submitted ------')
    console.log(model)
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL.fetch({assertionId: this.assertionId})
    .pipe(untilDestroyed(this))
    .subscribe({
      next: ({data: { assertion }}) => {
        if (assertion) {
          this.model = {
            id: assertion.id,
            fields: assertionToModelFields(assertion)
          }
          this.cdr.detectChanges()
        }
      },
      error: (error) => {
        console.log("Error retrieving Assertion")
        console.log(error)
      },
      complete: () => {
        this.state.formReady$.next(true)
      }
    })
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}
