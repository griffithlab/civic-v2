import { assertionSubmitFormInitialModel } from '@app/forms2/models/assertion-submit.model'
import { CvcAcmgCodeSelectFieldOptions } from '@app/forms2/types/acmg-code-select/acmg-code-select.type'
import { CvcAmpCategorySelectFieldOptions } from '@app/forms2/types/amp-category-select/amp-category-select.type'
import { CvcClingenCodeSelectFieldOptions } from '@app/forms2/types/clingen-code-select/clingen-code-select.type'
import { CvcDirectionSelectFieldOptions } from '@app/forms2/types/direction-select/direction-select.type'
import { CvcDiseaseSelectFieldOptions } from '@app/forms2/types/disease-select/disease-select.type'
import { CvcFdaCompanionTestCheckboxFieldOptions } from '@app/forms2/types/fda-companion-test-checkbox/fda-companion-test-checkbox.type'
import { CvcFdaRegulatoryApprovalCheckboxFieldOptions } from '@app/forms2/types/fda-regulatory-approval-checkbox/fda-regulatory-approval-checkbox.type'
import { CvcInteractionSelectFieldOptions } from '@app/forms2/types/interaction-select/interaction-select.type'
import { CvcNccnGuidelineSelectFieldOptions } from '@app/forms2/types/nccn-guideline-select/nccn-guideline-select.type'
import { CvcNccnGuidelineVersionFieldOptions } from '@app/forms2/types/nccn-guideline-version-input/nccn-guideline-version-input.type'
import { CvcOrgSubmitButtonFieldConfig } from '@app/forms2/types/org-submit-button/org-submit-button.type'
import { CvcOriginSelectFieldOptions } from '@app/forms2/types/origin-select/origin-select.type'
import { CvcPhenotypeSelectFieldOptions } from '@app/forms2/types/phenotype-select/phenotype-select.type'
import { CvcTherapySelectFieldOptions } from '@app/forms2/types/therapy-select/therapy-select.type'
import assignFieldConfigDefaultValues from '@app/forms2/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms2/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
      submitLabel: 'Submit Assertion',
      showDevPanel: false,
    },
    fieldGroup: [
      {
        key: 'clientMutationId',
        props: {
          hidden: true,
        },
      },
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          title: 'New Assertion',
        },
        fieldGroup: [
          {
            key: 'molecularProfileId',
            type: 'molecular-profile-select',
            props: {
              required: true,
              tooltip: 'A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.',
              watchVariantMolecularProfileId: true,
              colSpan: 16,
            },
          },
          {
            key: 'assertionType',
            type: 'type-select',
            props: {
              required: true,
              colSpan: 8,
            },
          },
          {
            key: 'assertionDirection',
            type: 'direction-select',
            props: {
              required: true,
              colSpan: 8,
            },
          },
          {
            key: 'significance',
            type: 'significance-select',
            props: {
              required: true,
              colSpan: 8,
            },
          },
          {
            key: 'diseaseId',
            type: 'disease-select',
            props: {
              colSpan: 8,
            },
          },
          <CvcTherapySelectFieldOptions>{
            key: 'therapyIds',
            type: 'therapy-multi-select',
            props: {},
          },
          <CvcInteractionSelectFieldOptions>{
            key: 'therapyInteractionType',
            type: 'interaction-select',
            props: {},
          },
          <CvcOriginSelectFieldOptions>{
            key: 'variantOrigin',
            type: 'origin-select',
            props: {
              required: true,
            },
          },
          <CvcPhenotypeSelectFieldOptions>{
            key: 'phenotypeIds',
            type: 'phenotype-multi-select',
            props: {},
          },
          {
            key: 'ampLevel',
            type: 'amp-category-select',
            props: {
              colSpan: 8
            },
          },
          {
            key: 'acmgCodeIds',
            type: 'acmg-code-multi-select',
            props: {
              colSpan: 8
            },
          },
          {
            key: 'clingenCodeIds',
            type: 'clingen-code-multi-select',
            props: {
              colSpan: 8
            },
          },
          <CvcNccnGuidelineSelectFieldOptions>{
            key: 'nccnGuidelineId',
            type: 'nccn-guideline-select',
            props: {},
          },
          <CvcNccnGuidelineVersionFieldOptions>{
            key: 'nccnGuidelineVersion',
            type: 'nccn-guideline-version-input',
            props: {}
          },
          <CvcFdaRegulatoryApprovalCheckboxFieldOptions>{
            key: 'fdaRegulatoryApproval',
            type: 'fda-regulatory-approval-checkbox',
            props: {}
          },
          <CvcFdaCompanionTestCheckboxFieldOptions>{
            key: 'fdaCompanionTest',
            type: 'fda-companion-test-checkbox',
            props: {}
          },
          {
            key: 'evidenceItemIds',
            type: 'evidence-multi-select',
            props: {
              required: true,
              isMultiSelect: true,
              colSpan: 24,
            },
          },
          {
            key: 'summary',
            type: 'textarea',
            wrappers: ['form-field'],
            props: {
              tooltip: 'A short, one sentence summary of the Assertion',
              placeholder: 'Enter an Assertion Summary',
              label: 'Assertion Summary',
              required: true,
              colSpan: 24
            },
          },
          {
            key: 'description',
            type: 'textarea',
            wrappers: ['form-field'],
            props: {
              tooltip:
                'A complete, original description of this Assertion. Limited to one paragraph.',
              placeholder: 'Enter an Assertion Statement',
              label: 'Assertion Statement',
              required: true,
              rows: 5,
              colSpan: 24
            },
          },
        ],
      },
      {
        wrappers: ['form-footer'],
        fieldGroup: [
          {
            key: 'comment',
            type: 'textarea',
            props: {
              label: 'Comment',
              // required: true,
            },
          },
          {
            type: 'cvc-cancel-button'
          },
          <CvcOrgSubmitButtonFieldConfig>{
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Assertion',
            },
          },
        ],
      },
    ],
  },
]

export const assertionSubmitFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    assertionSubmitFormInitialModel
  )
