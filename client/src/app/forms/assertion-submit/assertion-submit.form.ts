import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AssertionClinicalSignificance, AssertionDirection, AssertionType, DrugInteraction, EvidenceItem, Maybe, NullableAmpLevelTypeInput, SourceSource, VariantOrigin } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { AssertionState } from '../config/states/assertion.state';

interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormDisease {
  id?: number;
  doid?: number;
  displayName?: string;
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

interface FormGene {
  id: number;
  name?: string;
}

interface FormVariant {
  id?: number;
  name: string;
}

// description: NullableStringInput!
// A detailed description of the Assertion including practice guidelines and approved tests.

// summary: NullableStringInput!
// A brief single sentence statement summarizing the clinical significance of this Assertion.

// variantId: Int!
// The ID of the Variant to which this Assertion belongs

// geneId: Int!
// The ID of the Gene to which this Assertion belongs

// variantOrigin: VariantOrigin!
// The Variant Origin for this Assertion.

// evidenceType: AssertionType!
// The Type of the Assertion

// clinicalSignificance: AssertionClinicalSignificance!
// The Clinical Significance of the Assertion

// diseaseId: NullableIntInput!
// The ID of the disease (if applicable) for this Assertion

// evidenceDirection: AssertionDirection!
// The evidence direction for this Assertion.

// phenotypeIds: [Int!]!
// List of IDs of CIViC Phenotype entries for this Assertion. An empty list indicates none.

// drugIds: [Int!]!
// List of IDs of CIViC Drug entries for this Assertion. An empty list indicates none.

// drugInteractionType: NullableDrugInteractionTypeInput!
// Drug interaction type for cases where more than one drug ID is provided.

// ampLevel: NullableAmpLevelTypeInput!
// The AMP/ASCO/CAP Category for this assertion.

// evidenceItemIds: [Int!]!
// IDs of evidence items that are included in this Assertion.

// nccnGuidelineId: NullableIntInput!
// The internal CIViC ID of the NCCN guideline associated with this Assertion

// acmgCodeIds: [Int!]!
// List of CIViC IDs for the ACMG/AMP codes associated with this Assertion

// fdaCompanionTest: Boolean!
// Is an FDA companion test available that pertains to this Assertion.

// fdaRegulatoryApproval: Boolean!
// Does the Assertion have FDA regulatory approval.
interface FormModel {
  fields: {
    id: number;
    description: string;
    summary: string;
    variant: FormVariant[];
    gene: FormGene[];
    variantOrigin: VariantOrigin;
    evidenceType: AssertionType;
    clinicalSignificance: AssertionClinicalSignificance;
    disease: FormDisease[];
    evidenceDirection: AssertionDirection;
    phenotypes: FormPhenotype[];
    drugs: FormDrug[];
    drugInteractionType: Maybe<DrugInteraction>;
    ampLevel: Maybe<NullableAmpLevelTypeInput>;
    evidenceItems: EvidenceItem[];
    nccnGuideline: Maybe<number>;
    acmgCodeIds: number[];
    fdaCompanionTest: boolean;
    fdaRegulatoryApproval: boolean;
  }
}

@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  styleUrls: ['./assertion-submit.form.less']
})
export class AssertionSubmitForm implements OnInit, OnDestroy {
  private destroy$!: Subject<void>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new AssertionState() };

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor() {

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-info'],
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
              maxCount: 1
            }
          },
          {
            key: 'variantOrigin',
            type: 'variant-origin-select',
            templateOptions: {
              required: true,
            }
          },
          {
            key: 'disease',
            type: 'disease-array',
            templateOptions: {}
          },
          {
            key: 'evidenceType',
            type: 'evidence-type-select',
            templateOptions: {
              label: 'Assertion Type',
              required: true,
            },
          },
          {
            key: 'evidenceDirection',
            type: 'evidence-direction-select',
            templateOptions: {
              label: 'Assertion Direction',
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
            key: 'drugs',
            type: 'drug-array',
          },
          {
            key: 'drugInteractionType',
            type: 'drug-interaction-select'
          },
          {
            key: 'ampLevel',
            type: 'input',
            templateOptions: {
              label: 'AMP Level',
            }
          },
          {
            key: 'acmgCodes',
            type: 'input',
            templateOptions: {
              label: 'ACMG/AMP Code(s)',
            }
          },
          {
            key: 'phenotypes',
            type: 'phenotype-array',
          },
          {
            key: 'nccnGuideline',
            type: 'input',
            templateOptions: {
              label: 'NCCN Guideline'
            }
          },
          {
            key: 'nccnGuidelineVersion',
            type: 'input',
            templateOptions: {
              label: 'NCCN Guideline Version'
            }
          },
          {
            key: 'fdaRegulatoryApproval',
            type: 'checkbox',
            templateOptions: {
              label: 'FDA Regulatory Approval?',
            }
          },
          {
            key: 'fdaCompanionTest',
            type: 'checkbox',
            templateOptions: {
              label: 'FDA Companion Test?',
            }
          },
          {
            key: 'summary',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Assertion Summary',
              helpText: 'A short, one sentence summary of this new assertion',
              placeholder: 'No description provided',
              required: true
            }
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Assertion Statement',
              helpText: 'A complete, original description of this new assertion, limited to one paragraph',
              placeholder: 'No description provided',
              required: true
            }
          },
          {
            key: 'source',
            type: 'multi-field',
            templateOptions: {
              label: 'Source',
              helpText: 'CIViC accepts PubMed or ASCO Abstracts sources. Please provide the source of the support for your evidence here.',
              addText: 'Specify a Source',
              maxCount: 1,
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                required: true,
              },
            },
          },
          {
            key: 'comment',
            type: 'cvc-comment-textarea',
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

  submitAssertion = (model: FormModel):void => {
    console.log('Assertion Submitted!');
    console.log(model);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {  }

}
