import { Component, Input, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  DrugInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  Organization,
  SourceSource,
  SuggestEvidenceItemRevisionInput,
  VariantOrigin,
  EvidenceItemRevisableFieldsGQL,
  RevisableEvidenceFieldsFragment,
  SuggestEvidenceItemRevisionGQL,
  SuggestEvidenceItemRevisionMutation,
  SuggestEvidenceItemRevisionMutationVariables,
} from '@app/generated/civic.apollo';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { EvidenceState } from '@app/forms/config/states/evidence.state';


interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormDisease {
  id: number;
  doid?: number;
  displayName: string;
}

interface FormDrug {
  id?: number;
  ncitId?: string;
  name?: string;
}

interface FormPhenotype {
  id: number;
  hpoId?: string;
  name?: string;
}

interface FormVariant {
  id: number;
  name: string;
}

/* SuggestEvidenceItemRevisionInput
 *
 * description: NullableStringInput!
 * The Evidence Items's description/summary text.
 *
 * variantId: Int!
 * The ID of the Variant to which this EvidenceItem belongs
 *
 * variantOrigin: VariantOrigin!
 * The Variant Origin for this EvidenceItem.
 *
 * sourceId: Int!
 * The ID of the Source from which this EvidenceItem was curated.
 *
 * evidenceType: EvidenceType!
 * The Type of the EvidenceItem
 *
 * clinicalSignificance: EvidenceClinicalSignificance!
 * The Clinical Significance of the EvidenceItem
 *
 * diseaseId: NullableIntInput!
 * The ID of the disease (if applicable) for this EvidenceItem
 *
 * evidenceLevel: EvidenceLevel!
 * The evidence level of the EvidenceItem
 *
 * evidenceDirection: EvidenceDirection!
 * The evidence direction for this EvidenceItem.

 * phenotypeIds: [Int!]!
 * List of IDs of CIViC Phenotype entries for this EvidenceItem. An empty list indicates none.
 *
 * rating: Int!
 * The rating for this ceItem
 *
 * drugIds: [Int!]!
 * List of IDs of CIViC Drug entries for this EvidenceItem. An empty list indicates none.
 *
 * drugInteractionType: NullableDrugInteractionTypeInput!
 * Drug interaction type for cases where more than one drug ID is provided.
 *
 */

interface FormModel {
  fields: {
    id: number;
    clinicalSignificance: EvidenceClinicalSignificance;
    description: string;
    disease: Maybe<FormDisease>[];
    drugInteractionType: Maybe<DrugInteraction>;
    drugs: FormDrug[];
    evidenceDirection: EvidenceDirection;
    evidenceLevel: EvidenceLevel;
    evidenceType: EvidenceType;
    phenotypes: FormPhenotype[];
    evidenceRating: Maybe<number>;
    source: FormSource[];
    variant: FormVariant[];
    variantOrigin: VariantOrigin;
    comment: Maybe<string>,
    organization: Maybe<Organization>
  };
}

@Component({
  selector: 'cvc-evidence-revise-form',
  templateUrl: './evidence-revise.form.html',
  styleUrls: ['./evidence-revise.form.less'],
})
export class EvidenceReviseForm implements OnInit, AfterViewInit, OnDestroy {
  @Input() evidenceId!: number;
  private destroy$!: Subject<void>;

  suggestRevisionMutator: MutatorWithState<SuggestEvidenceItemRevisionGQL, SuggestEvidenceItemRevisionMutation, SuggestEvidenceItemRevisionMutationVariables>

  formModel: Maybe<FormModel>;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new EvidenceState() };

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  constructor(
    private suggestRevisionGQL: SuggestEvidenceItemRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private revisableFieldsGQL: EvidenceItemRevisableFieldsGQL
  ) {

    this.suggestRevisionMutator = new MutatorWithState(networkErrorService)

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-info'],
        templateOptions: {
          label: 'Suggest Evidence Item Revision Form'
        },
        fieldGroup: [
          {
            key: 'id',
            type: 'input',
            hide: true
          },
          {
            key: 'variant',
            type: 'multi-field',
            templateOptions: {
              label: 'Variant',
              addText: 'Specify a Variant',
              maxCount: 1,
            },
            fieldArray: {
              type: 'variant-input',
              templateOptions: {
                required: true,
              },
            },
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
            type: 'source-array',
            templateOptions: {
              required: true
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
              label: 'Rating',
              helpText: 'Please rate your evidence on a scale of one to five stars. Use the star rating descriptions for guidance.',
              required: true
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText: 'Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item\'s comment thread.',
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10
            },
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Evidence Item Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ];
  }

  ngOnInit() {
    this.destroy$ = new Subject();
  }


  ngAfterViewInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL.fetch({ evidenceId: this.evidenceId })
      .subscribe(        // response
        ({ data: { evidenceItem } }) => {
          if (evidenceItem) {
            this.formModel = this.toFormModel(evidenceItem);
          }
        },
        // error
        (error) => {
          console.error('Error retrieving evidenceItem.');
          console.error(error);
        },
        // complete
        () => {
          if (this.formOptions.updateInitialValue) {
            this.formOptions.updateInitialValue();
          }
          // this.formGroup.updateValueAndValidity();
          // prompt fields to display any errors that exist in loaded evidenceItem
          this.formGroup.markAllAsTouched();
          // mark comment field as untouched, we don't want to show an error before the user interacts with the field
          const commentFc: AbstractControl | null = this.formGroup.get('fields.comment');
          if (commentFc) { commentFc.markAsUntouched() }
        });
  }

  toFormModel(evidence: RevisableEvidenceFieldsFragment): FormModel {
    return {
      fields: {
        ...evidence,
        variant: [evidence.variant],
        source: [evidence.source], // wrapping an array so multi-field will display source properly until we write a single-source option
        drugs: evidence.drugs.length > 0 ? evidence.drugs : [],
        disease: [evidence.disease],
        comment: this.formModel?.fields.comment,
        drugInteractionType: evidence.drugInteractionType,
        organization: this.formModel?.fields.organization,
        evidenceRating: evidence.evidenceRating
      },
    }
  }

  submitRevision(formModel: Maybe<FormModel>): void {
    let input = this.toRevisionInput(formModel)
    if(input) {
      let state = this.suggestRevisionMutator.mutate(this.suggestRevisionGQL, {
        input: input
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

  toRevisionInput(model: Maybe<FormModel>): Maybe<SuggestEvidenceItemRevisionInput> {
    if (model) {
      const fields = model.fields;
      return {
        id: fields.id,
        comment: fields.comment!,
        fields: {
          variantOrigin: fields.variantOrigin,
          description: fmt.toNullableString(fields.description),
          variantId: fields.variant[0].id,
          sourceId: fields.source[0].id!,
          evidenceType: fields.evidenceType,
          evidenceDirection: fields.evidenceDirection,
          clinicalSignificance: fields.clinicalSignificance,
          diseaseId: fmt.toNullableInput(fields.disease[0]?.id),
          evidenceLevel: fields.evidenceLevel,
          phenotypeIds: fields.phenotypes.map((ph: FormPhenotype) => { return ph.id }),
          rating: fields.evidenceRating!,
          drugIds: fields.drugs.map((dr: FormDrug) => { return dr.id! }),
          drugInteractionType: fmt.toNullableInput(fields.drugInteractionType)
        },
        organizationId: model.fields.organization?.id

      }
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
