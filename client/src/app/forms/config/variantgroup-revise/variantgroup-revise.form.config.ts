import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    wrappers: ['form-layout'],
    props: {
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
        props: {
          formCardOptions: { title: 'Revise Variant Group' },
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'base-input',
            props: {
              label: 'Variant Group Name',
              required: true,
            },
          },
          {
            key: 'description',
            type: 'base-textarea',
            props: {
              tooltip:
                'User-defined summary of the clinical relevance of this Variant Group.',
              placeholder: 'Enter a Variant Group Summary',
              label: 'Variant Group Summary',
              required: true,
              rows: 5,
            },
          },
          {
            key: 'sourceIds',
            type: 'source-multi-select',
            wrappers: ['form-field'],
            props: { required: false },
          },
          {
            key: 'variantIds',
            type: 'variant-multi-select',
            props: {
              label: 'Variants',
              required: true,
              requireFeature: false,
              showManagerBtn: true,
            },
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
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Variant Group Revision',
              align: 'right',
            },
          },
        ],
      },
    ],
  },
]

export const variantgroupSuggestFields: FormlyFieldConfig[] = formFieldConfig
