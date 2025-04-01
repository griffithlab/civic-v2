import { Component, OnInit, } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  CreateLinkedSourceGQL,
  CreateLinkedSourceMutation,
  CreateLinkedSourceMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { relatedSourceSuggestFields } from './related-source-submit.form.config'
import { Observable, Subscription } from 'rxjs'
import { sourceFormModelToCreateLinkedSourceInput } from '@app/forms/utilities/source-to-model-fields'
import { LinkedSourceFields } from '@app/forms/models/linked-source-fields.model'

@UntilDestroy()
@Component({
    selector: 'cvc-related-source-submit-form',
    templateUrl: './related-source-submit.form.html',
    styleUrls: ['./related-source-submit.form.less'],
    standalone: false
})
export class CvcRelatedSourceSubmitForm implements OnInit{
  private routeSub?: Subscription
  sourceId?: number

  model: LinkedSourceFields
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  createLinkedSourceMutator: MutatorWithState<
    CreateLinkedSourceGQL,
    CreateLinkedSourceMutation,
    CreateLinkedSourceMutationVariables
  >

  mutationState?: MutationState
  newSourceId: Maybe<number>
  selectedSourceId: Maybe<number>
  url?: string

  fullyCuratedSource$?: Observable<Maybe<boolean>>
  existingSourceSuggestion$?: Observable<Maybe<boolean>>

  constructor(
    private createLinkedSourceGQL: CreateLinkedSourceGQL,
    networkErrorService: NetworkErrorsService,
    private route: ActivatedRoute
  ) {
    this.form = new UntypedFormGroup({})
    this.model = { fields: {} }
    this.fields = relatedSourceSuggestFields

    this.createLinkedSourceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.sourceId = +params['sourceId'];
    });
  }

  onModelChange(newModel: LinkedSourceFields) {
    if(newModel.sourceId != this.selectedSourceId) {
      this.selectedSourceId = newModel.sourceId
    }
  }

  onSubmit(model: LinkedSourceFields) {
    const input = sourceFormModelToCreateLinkedSourceInput({
      fields: {
        sourceId: this.sourceId,
        linkedSourceId: model.fields.sourceId,
      },
      reason: model.fields.reason,
      comment: model.comment
    })

    if (input) {
      this.mutationState = this.createLinkedSourceMutator.mutate(
        this.createLinkedSourceGQL,
        { input },
        undefined,
        (data) => {
          this.newSourceId = Number(data.createLinkedSource?.sourceLink.id) || undefined;
          if (this.newSourceId) {
            this.url = `/sources/${this.sourceId}/summary`
          }
        }
      )
    }
  }
  
  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
