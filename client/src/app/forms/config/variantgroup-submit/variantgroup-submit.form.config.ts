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
      // form-card wraps the form fields in a card, providing a place to put a title, and other controls e.g. form options, status
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: {
          formCardOptions: { title: 'Submit Variant Group' },
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'base-input',
            props: {
              label: 'Variant Group Name',
              required: true,
              colSpan: 24,
            },
          },
          {
            key: 'description',
            type: 'textarea',
            wrappers: ['form-field'],
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
              colSpan: 24,
              requireFeature: false,
              showManagerBtn: true,
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
              submitLabel: 'Submit Variant Group',
            },
          },
        ],
      },
    ],
  },
]

export const variantgroupSuggestFields: FormlyFieldConfig[] = formFieldConfig
