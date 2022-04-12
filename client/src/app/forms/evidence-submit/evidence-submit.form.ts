import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DrugInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  Organization,
  SubmitEvidenceItemGQL,
  SubmitEvidenceItemInput,
  SubmitEvidenceItemMutation,
  SubmitEvidenceItemMutationVariables,
  VariantOrigin,
} from '@app/generated/civic.apollo';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { EvidenceState } from '@app/forms/config/states/evidence.state';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { takeUntil } from 'rxjs/operators';
import { FormDisease, FormDrug, FormGene, FormPhenotype, FormSource, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    id: number

    description: string
    source: FormSource[]

    gene: FormGene[],
    variant: FormVariant[]

    variantOrigin: VariantOrigin
    disease: FormDisease[]
    drugs: FormDrug[]
    drugInteractionType: Maybe<DrugInteraction>

    clinicalSignificance: EvidenceClinicalSignificance
    evidenceDirection: EvidenceDirection
    evidenceLevel: EvidenceLevel
    evidenceType: EvidenceType
    evidenceRating: number

    phenotypes: FormPhenotype[]

    comment?: string
    organization?: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  styleUrls: ['./evidence-submit.form.less'],
})
export class EvidenceSubmitForm implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new EvidenceState() };

  submitEvidenceMutator: MutatorWithState<SubmitEvidenceItemGQL, SubmitEvidenceItemMutation, SubmitEvidenceItemMutationVariables>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor(
    private submitEvidenceGQL: SubmitEvidenceItemGQL,
    private networkErrorService: NetworkErrorsService,
    ) {

    this.submitEvidenceMutator = new MutatorWithState(networkErrorService);

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Add Evidence Item Form'
        },
        fieldGroup: [
          {
            key: 'gene',
            type: 'gene-array',
            templateOptions: {
              maxCount: 1,
              required: true
            }
          },
          {
            key: 'variant',
            type: 'variant-array',
            templateOptions: {
              required: true,
              maxCount: 1,
              helpText: 'The most specific description of the variant that the underlying source allows.',
            }
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Evidence Statement',
              helpText: 'Your original description of evidence from published literature detailing the association or lack of association between a variant and its predictive, prognostic, diagnostic, predisposing, functional or oncogenic value. Data constituting personal or identifying information should not be entered (e.g. <a href="https://www.hipaajournal.com/what-is-protected-health-information/" target="_blank">protected health information (PHI) as defined by HIPAA</a> in the U.S. and/or comparable laws in your jurisdiction).',
              placeholder: 'No description provided',
              required: true
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
            key: 'variantOrigin',
            type: 'variant-origin-select',
            templateOptions: {
              required: true,
            }
          },
          {
            key: 'evidenceType',
            type: 'evidence-type-select',
            templateOptions: {
              required: true,
            },
          },
          {
            key: 'clinicalSignificance',
            type: 'clinical-significance-select',
            templateOptions: {
              required: true
            }
          },
          {
            key: 'disease',
            type: 'disease-array',
            templateOptions: {
              maxCount: 1,
            }
          },
          {
            key: 'evidenceLevel',
            type: 'evidence-level-select',
            templateOptions: {
              required: true,
            }
          },
          {
            key: 'evidenceDirection',
            type: 'evidence-direction-select',
            templateOptions: {
              required: true,
            },
          },
          {
            key: 'drugs',
            type: 'drug-array',
          },
          {
            key: 'drugInteractionType',
            type: 'drug-interaction-select'
          },
          {
            key: 'phenotypes',
            type: 'phenotype-array',
          },
          {
            key: 'evidenceRating',
            type: 'rating-input',
            templateOptions: {
              required: true,
              label: 'Rating',
              helpText: 'Please rate your evidence on a scale of one to five stars. Use the star rating descriptions for guidance.',
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText: 'Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item\'s comment thread.',
              placeholder: 'Please enter a comment describing your revision.',
              required: false,
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
              submitLabel: 'Submit Evidence Item',
              submitSize: 'large'
            }
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  submitEvidence(formModel: Maybe<FormModel>): void {
    let input = this.toSubmitInput(formModel);
    if (input) {
      let state = this.submitEvidenceMutator.mutate(this.submitEvidenceGQL, {
        input: input
      },
      (data) => {
        this.newId = data.submitEvidence.evidenceItem.id;
      })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if(res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if(errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<SubmitEvidenceItemInput> {
    if (model) {
      const fields = model.fields;
      return {
        fields: {
          variantOrigin: fields.variantOrigin,
          description: fmt.toNullableString(fields.description),
          variantId: fields.variant[0].id!,
          sourceId: fields.source[0].id!,
          evidenceType: fields.evidenceType,
          evidenceDirection: fields.evidenceDirection,
          clinicalSignificance: fields.clinicalSignificance,
          diseaseId: fmt.toNullableInput(fields.disease[0]?.id),
          evidenceLevel: fields.evidenceLevel,
          phenotypeIds: fields.phenotypes.map((ph: FormPhenotype) => { return ph.id }),
          rating: +fields.evidenceRating,
          drugIds: fields.drugs.map((dr: FormDrug) => { return dr.id! }),
          drugInteractionType: fmt.toNullableInput(fields.drugInteractionType)
        },
      comment: fields.comment && fields.comment.length > 0 ? fields.comment : undefined,
      organizationId: model?.fields.organization?.id
    }

    }
    return undefined
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
