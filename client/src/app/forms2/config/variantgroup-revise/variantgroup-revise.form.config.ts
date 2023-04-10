import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    wrappers: ['form-layout'],
    props: {
      submitLabel: 'Revise Variant Group',
      showDevPanel: true,
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
          title: 'Revise Variant Group',
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            props: {
              label: 'Variant Group Name',
              required: true,
              colSpan: 24,
            },
          },
          {
            key: 'variantIds',
            type: 'variant-multi-select',
            props: {
              label: 'Variants',
              required: true,
              colSpan: 24,
              requireGene: false,
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
              // required: true,
            },
          },
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Variant Group Revision',
            },
          },
        ],
      },
    ],
  },
]

export const variantgroupSuggestFields: FormlyFieldConfig[] = formFieldConfig
