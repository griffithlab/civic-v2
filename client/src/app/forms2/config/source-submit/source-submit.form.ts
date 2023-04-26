import { ChangeDetectorRef, Component, OnInit, } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  SubmitSourceGQL,
  SubmitSourceMutation,
  SubmitSourceMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { sourceSuggestFields } from './source-submit.form.config'
import { SourceModel, sourceFormModelToInput } from '@app/forms2/utilities/source-to-model-fields'

@UntilDestroy()
@Component({
  selector: 'cvc-source-submit-form',
  templateUrl: './source-submit.form.html',
  styleUrls: ['./source-submit.form.less'],
})
export class CvcSourceSubmitForm implements OnInit{
  model: SourceModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  submitSourceMutator: MutatorWithState<
    SubmitSourceGQL,
    SubmitSourceMutation,
    SubmitSourceMutationVariables
  >

  mutationState?: MutationState
  newSourceId: Maybe<number>
  url?: string

  constructor(
    private submitSourceGQL: SubmitSourceGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.model = { fields: {} }
    this.fields = sourceSuggestFields

    this.submitSourceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit(): void {
    this.url = '/curation/queues/pending-sources'
  }

  onSubmit(model: SourceModel) {
    const input = sourceFormModelToInput(model)
    if (input) {
      this.mutationState = this.submitSourceMutator.mutate(
        this.submitSourceGQL,
        { input: input },
        undefined,
        (data) => {
          this.newSourceId = data.suggestSource?.sourceSuggestion.id
        }
      )
    }
  }
}
