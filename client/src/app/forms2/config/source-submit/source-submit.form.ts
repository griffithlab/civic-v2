import { ChangeDetectorRef, Component, OnInit, } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
    FullyCuratedSourceGQL,
  FullyCuratedSourceQuery,
  FullyCuratedSourceQueryVariables,
  Maybe,
  SubmitSourceGQL,
  SubmitSourceMutation,
  SubmitSourceMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { sourceSuggestFields } from './source-submit.form.config'
import { SourceModel, sourceFormModelToInput } from '@app/forms2/utilities/source-to-model-fields'
import { QueryRef } from 'apollo-angular'
import { Observable, map } from 'rxjs'

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
  selectedSourceId: Maybe<number>
  url?: string

  curatedQueryRef?: QueryRef<FullyCuratedSourceQuery, FullyCuratedSourceQueryVariables>
  fullyCuratedSource$?: Observable<Maybe<boolean>>

  constructor(
    private submitSourceGQL: SubmitSourceGQL,
    private fullyCuratedSourceGQL: FullyCuratedSourceGQL,
    networkErrorService: NetworkErrorsService,
  ) {
    this.form = new UntypedFormGroup({})
    this.model = { fields: {} }
    this.fields = sourceSuggestFields

    this.submitSourceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit(): void {
    this.url = '/curation/queues/pending-sources'
    this.curatedQueryRef = this.fullyCuratedSourceGQL.watch({sourceId: 0})

    this.fullyCuratedSource$ = this.curatedQueryRef?.valueChanges.pipe(
        map(c => c.data?.source?.fullyCurated),
        untilDestroyed(this)
    )
  }

  onModelChange(newModel: SourceModel) {
    console.log(newModel)
    if(newModel.fields.sourceId != this.selectedSourceId) {
      this.selectedSourceId = newModel.fields.sourceId
      if (this.selectedSourceId) {
        this.curatedQueryRef?.refetch({sourceId: this.selectedSourceId })
      } else {
        this.curatedQueryRef?.refetch({sourceId: 0 })
      }
    }
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
