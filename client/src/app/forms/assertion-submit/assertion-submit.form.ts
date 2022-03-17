import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { AcmgCode, AmpLevel, AssertionClinicalSignificance, AssertionDirection, AssertionType, DrugInteraction, EvidenceItem, Maybe, NccnGuideline, NullableAmpLevelTypeInput, Organization, SubmitAssertionGQL, SubmitAssertionInput, SubmitAssertionMutation, SubmitAssertionMutationVariables, VariantOrigin } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AssertionState } from '../config/states/assertion.state';
import { FormDisease, FormDrug, FormEvidence, FormGene, FormPhenotype, FormVariant } from '../forms.interfaces';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import { FieldValidationExtension } from '@ngx-formly/core/lib/extensions/field-validation/field-validation';

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
    ampLevel: Maybe<AmpLevel>
    // evidenceItems: FormEvidence[]
    evidenceItems: number[],
    nccnGuideline: Maybe<NccnGuideline>
    nccnGuidelineVersion: Maybe<string>,
    acmgCodes: AcmgCode[],
    fdaCompanionTest: boolean
    fdaRegulatoryApproval: boolean
    comment: Maybe<string>
    organization: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  styleUrls: ['./assertion-submit.form.less']
})
export class AssertionSubmitForm implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new AssertionState() };

  submitAssertionMutator: MutatorWithState<SubmitAssertionGQL, SubmitAssertionMutation, SubmitAssertionMutationVariables>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor(
    private submitAssertionGQL: SubmitAssertionGQL,
    private networkErrorService: NetworkErrorsService

  ) {

    this.submitAssertionMutator = new MutatorWithState(networkErrorService)

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Add Assertion Form'
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
            templateOptions: {
              maxCount: 1
            }
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
            templateOptions: {}
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
            type: 'evidence-transfer-tmp',
            templateOptions: {
              label: 'Evidence Items',
              helpText: 'Select evidence items supporting this assertion.',
            }
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

  toSubmitInput(model: Maybe<FormModel>): Maybe<SubmitAssertionInput> {
    if (model) {
      const fields = model.fields
      return {
        comment: fields.comment,
        organizationId: fields.organization?.id,
        fields: {
          description: fmt.toNullableString(fields.description),
          summary: fmt.toNullableString(fields.summary),
          variantId: fields.variant[0].id!,
          geneId: fields.gene[0].id!,
          variantOrigin: fields.variantOrigin,
          assertionType: fields.evidenceType,
          clinicalSignificance: fields.clinicalSignificance,
          diseaseId: fmt.toNullableInput(fields.disease[0].id!),
          assertionDirection: fields.evidenceDirection,
          phenotypeIds: fields.phenotypes.map(p => p.id),
          drugIds: fields.drugs.map(d => d.id),
          drugInteractionType: fmt.toNullableInput(fields.drugInteractionType),
          ampLevel: fmt.toNullableInput(fields.ampLevel),
          nccnGuidelineId: fmt.toNullableInput(fields.nccnGuideline?.id),
          nccnGuidelineVersion: fmt.toNullableString(fields.nccnGuidelineVersion),
          acmgCodeIds: fields.acmgCodes.map(c => c.id),
          fdaCompanionTest: fields.fdaCompanionTest,
          fdaRegulatoryApproval: fields.fdaRegulatoryApproval,
          // evidenceItemIds: fields.evidenceItems.map((e) => e.id)
          evidenceItemIds: fields.evidenceItems,
        }
      }
    }
    return undefined
  }

  submitAssertion(model: Maybe<FormModel>): void {
    let input = this.toSubmitInput(model)
    if (input) {

      let state = this.submitAssertionMutator.mutate(this.submitAssertionGQL, {
        input: input
      },
        (data) => {
          this.newId = data.submitAssertion.assertion.id;
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
