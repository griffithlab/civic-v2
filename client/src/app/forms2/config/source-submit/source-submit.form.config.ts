import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    wrappers: ['form-layout'],
    props: {
      submitLabel: 'Submit Source Suggestion',
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
          title: 'Submit Variant Group',
        },
        fieldGroup: [
          {
            key: 'molecularProfileId',
            type: 'molecular-profile-select',
            props: {
              required: false,
              description: 'Select a Molecular Profile for this Source Suggestion, if applicable.',
              watchVariantMolecularProfileId: true,
            },
          },
          {
            key: 'diseaseId',
            type: 'disease-select',
            props: {},
          },
          {
            key: 'sourceId',
            type: 'source-select',
            wrappers: ['form-field'],
            props: { required: true },
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
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Source Suggestion',
            },
          },
        ],
      },
    ],
  },
]

export const sourceSuggestFields: FormlyFieldConfig[] = formFieldConfig
