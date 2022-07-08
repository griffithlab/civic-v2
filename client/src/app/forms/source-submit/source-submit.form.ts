import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { Maybe, Organization, SuggestSourceGQL, SuggestSourceInput, SuggestSourceMutation, SuggestSourceMutationVariables } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormDisease, FormGene, FormSource, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    id: number,
    gene: FormGene[],
    variant: FormVariant[],
    disease: FormDisease[],
    source: FormSource[],
    comment: Maybe<string>,
    organization: Maybe<Organization>,
  }
}

@Component({
  selector: 'cvc-source-submit-form',
  templateUrl: './source-submit.form.html',
  styleUrls: ['./source-submit.form.less']
})
export class SourceSubmitForm implements OnInit {
  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  suggestSourceMutator: MutatorWithState<SuggestSourceGQL, SuggestSourceMutation, SuggestSourceMutationVariables>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor(
    private suggestSourceGQL: SuggestSourceGQL,
    private errService: NetworkErrorsService,
  ) {

    this.suggestSourceMutator = new MutatorWithState(errService);

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Suggest Source Form'
        },
        fieldGroup: [
          {
            key: 'gene',
            type: 'gene-array',
            templateOptions: {
              maxCount: 1,
            }
          },
          {
            key: 'variant',
            type: 'variant-array',
            templateOptions: {
              maxCount: 1
            }
          },
          {
            key: 'disease',
            type: 'disease-array',
            templateOptions: {
              maxCount: 1
            }
          },
          {
            key: 'source',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Source',
              helpText: 'CIViC accepts PubMed or ASCO Abstracts sources. Please provide the source of the support for your evidence here.',
              addText: 'Specify a Source',
              required: true,
              maxCount: 1,
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                hideLabel: true,
                required: true,
              },
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText: 'Please provide any additional comments you wish to make about this Source Suggestion. This comment will appear as the first comment in this item\'s comment thread.',
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10
            },
          },
          {
            key: 'cancel',
            type: 'cancel-button'
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Source Suggestion',
              submitSize: 'large'
            }
          }
        ]
      } // fieldGroup[ ]
    ]; // formFields[ ]
  } // constructor()

  submitSourceSuggestion(formModel: FormModel): void {
    console.log(formModel);
    let input = this.toSubmitInput(formModel);
    if (input) {
      let state = this.suggestSourceMutator.mutate(this.suggestSourceGQL, {
        input: input
      }, {},
        (data) => {
          this.newId = data.suggestSource.sourceSuggestion.id;
        })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<SuggestSourceInput> {
    if (model) {
      const fields = model.fields;
      return {
          variantId: fields.variant[0]?.id,
          geneId: fields.gene[0]?.id,
          sourceId: fields.source[0].id!,
          diseaseId: fields.disease[0]?.id,
      comment: fields.comment!,
      organizationId: model?.fields.organization?.id
    }

    }
    return undefined
  }



  ngOnInit(): void {
  }

}
