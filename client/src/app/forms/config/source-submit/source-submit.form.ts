import { ChangeDetectorRef, Component, OnInit, } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  SourceSuggestionChecksGQL,
  SourceSuggestionChecksQuery,
  SourceSuggestionChecksQueryVariables,
  SubmitSourceGQL,
  SubmitSourceMutation,
  SubmitSourceMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { sourceSuggestFields } from './source-submit.form.config'
import { QueryRef } from 'apollo-angular'
import { Observable, map } from 'rxjs'
import { SourceModel, sourceFormModelToInput } from '@app/forms/utilities/source-to-model-fields'

@UntilDestroy()
@Component({
    selector: 'cvc-source-submit-form',
    templateUrl: './source-submit.form.html',
    styleUrls: ['./source-submit.form.less'],
    standalone: false
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

  suggestionChecksQueryRef?: QueryRef<SourceSuggestionChecksQuery, SourceSuggestionChecksQueryVariables>
  fullyCuratedSource$?: Observable<Maybe<boolean>>
  existingSourceSuggestion$?: Observable<Maybe<boolean>>

  constructor(
    private submitSourceGQL: SubmitSourceGQL,
    private sourceChecksGQL: SourceSuggestionChecksGQL,
    networkErrorService: NetworkErrorsService,
  ) {
    this.form = new UntypedFormGroup({})
    this.model = { fields: {} }
    this.fields = sourceSuggestFields

    this.submitSourceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit(): void {
    this.url = '/curation/queues/pending-sources'
    this.suggestionChecksQueryRef = this.sourceChecksGQL.watch({sourceId: 0})

    this.fullyCuratedSource$ = this.suggestionChecksQueryRef?.valueChanges.pipe(
        map(c => c.data?.source?.fullyCurated),
        untilDestroyed(this)
    )

    this.existingSourceSuggestion$ = this.suggestionChecksQueryRef?.valueChanges.pipe(
        map(c => {
          const count = c.data?.sourceSuggestions?.filteredCount
          if(count) {
            return count > 0
          } else {
            return false
          }
        }),
        untilDestroyed(this)
    )
  }

  onModelChange(newModel: SourceModel) {
    if(newModel.fields.sourceId != this.selectedSourceId) {
      this.selectedSourceId = newModel.fields.sourceId
      if (this.selectedSourceId) {
        this.suggestionChecksQueryRef?.refetch({sourceId: this.selectedSourceId })
      } else {
        this.suggestionChecksQueryRef?.refetch({sourceId: 0 })
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
