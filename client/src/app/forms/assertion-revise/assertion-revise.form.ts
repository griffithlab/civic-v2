import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AssertionClinicalSignificance, AssertionDirection, AssertionType, DrugInteraction, EvidenceItem, Maybe, NullableAmpLevelTypeInput, SourceSource, VariantOrigin } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { AssertionState } from '../config/states/assertion.state';
import { FormDisease, FormDrug, FormEvidence, FormGene, FormPhenotype, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    id: number
    description: string
    summary: string
    variant: FormVariant[]
    gene: FormGene[]
    variantOrigin: VariantOrigin
    evidenceType: AssertionType
    clinicalSignificance: AssertionClinicalSignificance
    disease: FormDisease[]
    evidenceDirection: AssertionDirection
    phenotypes: FormPhenotype[]
    drugs: FormDrug[]
    drugInteractionType: Maybe<DrugInteraction>
    ampLevel: Maybe<NullableAmpLevelTypeInput>
    evidenceItems: FormEvidence[]
    nccnGuideline: Maybe<number>
    acmgCodeIds: number[]
    fdaCompanionTest: boolean
    fdaRegulatoryApproval: boolean
    comment: Maybe<string>
  }
}

@Component({
  selector: 'cvc-assertion-revise-form',
  templateUrl: './assertion-revise.form.html',
  styleUrls: ['./assertion-revise.form.less']
})
export class AssertionReviseForm implements OnInit, OnDestroy {
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
        wrappers:  ['form-container'],
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
            templateOptions: {}
          },
          {
            key: 'drugInteractionType',
            type: 'drug-interaction-select',
            templateOptions: {}
          },
          {
            key: 'ampLevel',
            type: 'amp-level-input',
            templateOptions: { }
          },
          {
            key: 'acmgCodes',
            type: 'acmg-code-array',
            templateOptions: {
              label: 'ACMG/AMP Code(s)',
            }
          },
          {
            key: 'phenotypes',
            type: 'phenotype-array',
            templateOptions: {}
          },
          {
            key: 'nccnGuideline',
            type: 'nccn-guideline-input',
            templateOptions: {}
          },
          {
            key: 'nccnGuidelineVersion',
            type: 'nccn-version-input',
            templateOptions: {}
          },
          {
            key: 'fdaRegulatoryApproval',
            type: 'fda-approval-checkbox',
            templateOptions: {}
          },
          {
            key: 'fdaCompanionTest',
            type: 'fda-test-checkbox',
            templateOptions: {}
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
            key: 'evidenceItems',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Evidence Items',
              helpText: 'Evidence Items that support the assertion.',
              addText: 'Specify EIDs',
            },
            fieldArray: {
              type: 'evidence-input',
              templateOptions: {
                required: true,
              },
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
              submitLabel: 'Submit Assertion Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ];
  }

  reviseAssertion = (model: FormModel):void => {
    console.log('Assertion Revision Submitted!');
    console.log(model);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {  }

}
