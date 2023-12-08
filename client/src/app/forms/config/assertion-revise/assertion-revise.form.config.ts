import { assertionReviseFormInitialModel } from '@app/forms/models/assertion-revise.model'
import { CvcAcmgCodeSelectFieldOptions } from '@app/forms/types/acmg-code-select/acmg-code-select.type'
import { CvcAmpCategorySelectFieldOptions } from '@app/forms/types/amp-category-select/amp-category-select.type'
import { CvcClingenCodeSelectFieldOptions } from '@app/forms/types/clingen-code-select/clingen-code-select.type'
import { CvcFdaCompanionTestCheckboxFieldOptions } from '@app/forms/types/fda-companion-test-checkbox/fda-companion-test-checkbox.type'
import { CvcFdaRegulatoryApprovalCheckboxFieldOptions } from '@app/forms/types/fda-regulatory-approval-checkbox/fda-regulatory-approval-checkbox.type'
import { CvcInteractionSelectFieldOptions } from '@app/forms/types/interaction-select/interaction-select.type'
import { CvcNccnGuidelineSelectFieldOptions } from '@app/forms/types/nccn-guideline-select/nccn-guideline-select.type'
import { CvcNccnGuidelineVersionFieldOptions } from '@app/forms/types/nccn-guideline-version-input/nccn-guideline-version-input.type'
import { CvcOrgSubmitButtonFieldConfig } from '@app/forms/types/org-submit-button/org-submit-button.type'
import { CvcOriginSelectFieldOptions } from '@app/forms/types/origin-select/origin-select.type'
import { CvcPhenotypeSelectFieldOptions } from '@app/forms/types/phenotype-select/phenotype-select.type'
import { CvcTherapySelectFieldOptions } from '@app/forms/types/therapy-select/therapy-select.type'
import { CvcEntityTypeSelectFieldConfig } from '@app/forms/types/type-select/type-select.type'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms/wrappers/form-layout/form-layout.wrapper'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
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
          formCardOptions: { title: 'Revise Assertion' },
        },
        fieldGroup: [
          {
            wrappers: ['form-row'],
            props: <CvcFormRowWrapperProps>{
              formRowOptions: {
                span: 24,
              },
            },
            fieldGroup: [
              {
                key: 'molecularProfileId',
                type: 'molecular-profile-select',
                props: {
                  required: true,
                  watchVariantMolecularProfileId: true,
                },
              },
            ],
          },
          {
            wrappers: ['form-row'],
            props: <CvcFormRowWrapperProps>{
              formRowOptions: {
                responsive: { xs: 24, lg: 12, xl: 8, xxl: 6 },
              },
            },
            fieldGroup: [
              <CvcEntityTypeSelectFieldConfig>{
                key: 'assertionType',
                type: 'type-select',
                props: {
                  required: true,
                },
              },
              {
                key: 'assertionDirection',
                type: 'direction-select',
                props: {
                  required: true,
                },
              },
              {
                key: 'significance',
                type: 'significance-select',
                props: {
                  required: true,
                },
              },
              {
                key: 'diseaseId',
                type: 'disease-select',
                props: {},
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
                props: {},
              },
              {
                key: 'acmgCodeIds',
                type: 'acmg-code-multi-select',
                props: {},
              },
              {
                key: 'clingenCodeIds',
                type: 'clingen-code-multi-select',
                props: {},
              },
              <CvcNccnGuidelineSelectFieldOptions>{
                key: 'nccnGuidelineId',
                type: 'nccn-guideline-select',
                props: {},
              },
              <CvcNccnGuidelineVersionFieldOptions>{
                key: 'nccnGuidelineVersion',
                type: 'nccn-guideline-version-input',
                props: {},
              },
              <CvcFdaRegulatoryApprovalCheckboxFieldOptions>{
                key: 'fdaRegulatoryApproval',
                type: 'fda-regulatory-approval-checkbox',
                props: {},
              },
              <CvcFdaCompanionTestCheckboxFieldOptions>{
                key: 'fdaCompanionTest',
                type: 'fda-companion-test-checkbox',
                props: {},
              },
            ],
          },
          {
            wrappers: ['form-row'],
            props: <CvcFormRowWrapperProps>{
              formRowOptions: {
                responsiveIndexed: [
                  {
                    xs: 24,
                  },
                  {
                    md: 24,
                    lg: 8,
                  },
                  {
                    md: 24,
                    lg: 16,
                  },
                ],
              },
            },
            fieldGroup: [
              {
                key: 'evidenceItemIds',
                type: 'evidence-multi-select',
                props: {
                  required: true,
                  isMultiSelect: true,
                },
              },
              {
                key: 'summary',
                type: 'base-textarea',
                props: {
                  tooltip: 'A short, one sentence summary of the Assertion',
                  placeholder: 'Enter an Assertion Summary',
                  label: 'Assertion Summary',
                  required: true,
                },
              },
              {
                key: 'description',
                type: 'base-textarea',
                props: {
                  tooltip:
                    'A complete, original description of this Assertion. Limited to one paragraph.',
                  placeholder: 'Enter an Assertion Statement',
                  label: 'Assertion Statement',
                  required: true,
                  rows: 5,
                },
              },
            ],
          },
        ],
      },
      {
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: {
            spanIndexed: [24, 12, 12],
          },
        },
        fieldGroup: [
          {
            key: 'comment',
            type: 'textarea',
            props: {
              label: 'Comment',
              required: true,
            },
          },
          {
            type: 'cvc-cancel-button',
          },
          <CvcOrgSubmitButtonFieldConfig>{
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Revisions',
              align: 'right',
            },
          },
        ],
      },
    ],
  },
]

export const assertionReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    assertionReviseFormInitialModel
  )
