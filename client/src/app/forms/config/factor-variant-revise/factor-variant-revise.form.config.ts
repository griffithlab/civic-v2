import { factorVariantReviseFormInitialModel } from '@app/forms/models/factor-variant-revise.model'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import { CvcOrgSubmitButtonFieldConfig } from '@app/forms/types/org-submit-button/org-submit-button.type'
import { FeatureInstanceTypes } from '@app/generated/civic.apollo'

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
          formCardOptions: { title: 'Revise Variant' },
        },
        fieldGroup: [
          {
            wrappers: ['form-row'],
            props: <CvcFormRowWrapperProps>{
              formRowOptions: {
                responsiveIndexed: [
                  { xs: 24, md: 12, lg: 8 },
                  { xs: 24, md: 12, lg: 8 },
                  { xs: 24, lg: 8 },
                ],
              },
            },
            fieldGroup: [
              {
                key: 'featureId',
                type: 'feature-select',
                props: {
                  description: 'Enter a Factor for this Variant',
                  required: true,
                  featureType: FeatureInstanceTypes.Factor,
                  canChangeFeatureType: false,
                },
              },
              {
                key: 'name',
                type: 'base-input',
                props: {
                  placeholder: 'Enter a name for this Variant',
                  description:
                    "Enter the name of the Variant according to the <a href='https://civic.readthedocs.io/en/latest/model/variants/name.html#curating-variant-names' target='blank'>Variant Curation SOP</a>",
                  label: 'Name',
                  required: true,
                  rows: 1,
                },
              },
              {
                key: 'aliases',
                type: 'tag-multi-input',
                props: {
                  label: 'Aliases',
                  description:
                    'List any aliases commonly used to refer to this Variant',
                  placeholder: 'Enter Alias and hit return',
                },
              },
            ],
          },
          {
            wrappers: ['form-row'],
            props: <CvcFormRowWrapperProps>{
              formRowOptions: {
                responsiveIndexed: [
                  { xs: 24, lg: 12, xl: 6, xxl: 8 },
                  { xs: 24, lg: 12, xl: 6, xxl: 8 },
                  { xs: 24, xl: 12, xxl: 8 },
                ],
              },
            },
            fieldGroup: [
              {
                key: 'variantTypeIds',
                type: 'variant-type-multi-select',
              },
              {
                key: 'ncitId',
                type: 'base-input',
                props: {
                  placeholder: 'NCI Thesaurus Code',
                  description:
                    'Enter the NCI Thesaurus ID for this Factor Variant',
                  label: 'NCI Thesaurus ID',
                  required: false,
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
            type: 'base-textarea',
            props: {
              label: 'Comment',
              placeholder: 'Please enter a comment describing your revisions.',
              required: true,
              minLength: 10,
            },
          },
          {
            type: 'cvc-cancel-button',
          },
          <CvcOrgSubmitButtonFieldConfig>{
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Variant Revisions',
              align: 'right',
            },
          },
        ],
      },
    ],
  },
]
export const factorVariantReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    factorVariantReviseFormInitialModel
  )
