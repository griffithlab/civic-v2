import { Component, OnDestroy } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import {
  AcmgCode,
  AmpLevel,
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
  ClingenCode,
  Maybe,
  NccnGuideline,
  Organization,
  SubmitAssertionGQL,
  SubmitAssertionInput,
  SubmitAssertionMutation,
  SubmitAssertionMutationVariables,
  TherapyInteraction,
  VariantOrigin,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AssertionState } from '../config/states/assertion.state';
import {
  FormDisease,
  FormTherapy,
  FormEvidence,
  FormMolecularProfile,
  FormPhenotype,
} from '../forms.interfaces';

interface FormModel {
  fields: {
    id: number;
    description: string;
    summary: string;
    molecularProfile: FormMolecularProfile;
    variantOrigin: VariantOrigin;
    evidenceType: AssertionType;
    significance: AssertionSignificance;
    disease: FormDisease[];
    evidenceDirection: AssertionDirection;
    phenotypes: FormPhenotype[];
    therapies: FormTherapy[];
    therapyInteractionType: Maybe<TherapyInteraction>;
    ampLevel: Maybe<AmpLevel>;
    evidenceItems: FormEvidence[];
    nccnGuideline: Maybe<NccnGuideline>;
    nccnGuidelineVersion: Maybe<string>;
    acmgCodes: AcmgCode[];
    clingenCodes: ClingenCode[];
    fdaCompanionTest: Maybe<boolean>;
    fdaRegulatoryApproval: Maybe<boolean>;
    comment: Maybe<string>;
    organization: Maybe<Organization>;
  };
}

@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  styleUrls: ['./assertion-submit.form.less'],
})
export class AssertionSubmitForm implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  formModel!: FormModel;
  formGroup: UntypedFormGroup = new UntypedFormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new AssertionState() };

  submitAssertionMutator: MutatorWithState<
    SubmitAssertionGQL,
    SubmitAssertionMutation,
    SubmitAssertionMutationVariables
  >;

  success: boolean = false;
  errorMessages: string[] = [];
  loading: boolean = false;
  newId?: number;

  constructor(
    private submitAssertionGQL: SubmitAssertionGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    let eidCallback = (eids: FormEvidence[]) => {
      this.formModel.fields.evidenceItems = eids;
    };

    let fdaApprovalCallback = (newVal: boolean | undefined) => {
      this.formModel!.fields.fdaRegulatoryApproval = newVal;
    };

    let fdaCompanionCallback = (newVal: boolean | undefined) => {
      this.formModel!.fields.fdaCompanionTest = newVal;
    };

    this.submitAssertionMutator = new MutatorWithState(networkErrorService);

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Add Assertion Form',
        },
        fieldGroup: [
          {
            key: 'molecularProfile',
            type: 'molecular-profile-input',
            templateOptions: {
              label: 'Molecular Profile',
              helpText:
                'A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated evidence.',
              required: true,
              allowCreate: false,
            },
          },
          {
            key: 'variantOrigin',
            type: 'variant-origin-select',
            templateOptions: {
              required: true,
            },
          },
          {
            key: 'disease',
            type: 'disease-array',
            templateOptions: {
              maxCount: 1,
              allowCreate: false,
            },
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
            key: 'significance',
            type: 'significance-select',
            templateOptions: {
              required: true,
            },
          },
          {
            key: 'therapies',
            type: 'therapy-array',
            templateOptions: {
              allowCreate: false,
            },
          },
          {
            key: 'therapyInteractionType',
            type: 'therapy-interaction-select',
            templateOptions: {},
          },
          {
            key: 'ampLevel',
            type: 'amp-level-input',
            templateOptions: {},
          },
          {
            key: 'acmgCodes',
            type: 'acmg-code-array',
            templateOptions: {
              label: 'ACMG/AMP Code(s)',
            },
          },
          {
            key: 'clingenCodes',
            type: 'clingen-code-array',
          },
          {
            key: 'phenotypes',
            type: 'phenotype-array',
            templateOptions: {},
          },
          {
            key: 'nccnGuideline',
            type: 'nccn-guideline-input',
            templateOptions: {},
          },
          {
            key: 'nccnGuidelineVersion',
            type: 'nccn-version-input',
            templateOptions: {},
          },
          {
            key: 'fdaRegulatoryApproval',
            type: 'fda-approval-checkbox',
            templateOptions: {
              modelCallback: fdaApprovalCallback,
            },
          },
          {
            key: 'fdaCompanionTest',
            type: 'fda-test-checkbox',
            templateOptions: {
              modelCallback: fdaCompanionCallback,
            },
          },
          {
            key: 'summary',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Assertion Summary',
              helpText: 'A short, one sentence summary of this new assertion',
              placeholder: 'No description provided',
              required: true,
            },
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Assertion Statement',
              helpText:
                'A complete, original description of this new assertion, limited to one paragraph',
              placeholder: 'No description provided',
              required: true,
            },
          },
          {
            key: 'evidenceItems',
            type: 'multi-field',
            wrappers: ['form-field', 'evidence-manager'],
            templateOptions: {
              label: 'Evidence Items',
              helpText: 'Evidence Items that support the assertion.',
              addText: 'Add Evidence by ID',
              required: true,
              eidCallback: eidCallback,
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
              helpText:
                "Please provide any additional comments you wish to make about this assertion. This comment will appear as the first comment in this item's comment thread.",
              placeholder: 'Please enter a comment describing your assertion.',
              minLength: 10,
            },
          },
          {
            key: 'cancel',
            type: 'cancel-button',
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Assertion',
              submitSize: 'large',
            },
          },
        ],
      },
    ];
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<SubmitAssertionInput> {
    if (model) {
      const fields = model.fields;
      return {
        comment:
          fields.comment && fields.comment.length != 0
            ? fields.comment
            : undefined,
        organizationId: fields.organization?.id,
        fields: {
          description: fmt.toNullableString(fields.description),
          summary: fmt.toNullableString(fields.summary),
          molecularProfileId: fields.molecularProfile.id,
          variantOrigin: fields.variantOrigin,
          assertionType: fields.evidenceType,
          significance: fields.significance,
          diseaseId: fmt.toNullableInput(fields.disease[0].id!),
          assertionDirection: fields.evidenceDirection,
          phenotypeIds: fields.phenotypes.map((p) => p.id),
          therapyIds: fields.therapies.map((d) => d.id),
          therapyInteractionType: fmt.toNullableInput(
            fields.therapyInteractionType
          ),
          ampLevel: fmt.toNullableInput(fields.ampLevel),
          nccnGuidelineId: fmt.toNullableInput(fields.nccnGuideline?.id),
          nccnGuidelineVersion: fmt.toNullableString(
            fields.nccnGuidelineVersion
          ),
          acmgCodeIds: fields.acmgCodes.map((c) => c.id),
          clingenCodeIds: fields.clingenCodes.map((c) => c.id),
          fdaCompanionTest: fmt.toNullableInput(fields.fdaCompanionTest),
          fdaRegulatoryApproval: fmt.toNullableInput(
            fields.fdaRegulatoryApproval
          ),
          evidenceItemIds: fields.evidenceItems.map((e) => e.id),
        },
      };
    }
    return undefined;
  }

  submitAssertion(model: Maybe<FormModel>): void {
    let input = this.toSubmitInput(model);
    if (input) {
      let state = this.submitAssertionMutator.mutate(
        this.submitAssertionGQL,
        {
          input: input,
        },
        {},
        (data) => {
          this.newId = data.submitAssertion?.assertion.id;
        }
      );

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true;
        }
      });

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs;
          this.success = false;
        }
      });

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
          this.loading = loading;
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
