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
          formCardOptions: { title: 'Submit Related Source' },
        },
        fieldGroup: [
          {
            key: 'sourceId',
            type: 'source-select',
            wrappers: ['form-field'],
            props: { required: true },
          },
          {
            key: 'reason',
            type: 'select',
            wrappers: ['form-field'],
            props: {
              label: 'Reason for Linking',
              required: true,
              options: [
                { value: 'SAME_CLINICAL_TRIAL', label: 'Same Clinical Trial' },
                {
                  value: 'OVERLAPPING_DATA_OR_PATIENTS',
                  label: 'Overlapping Data or Patients',
                },
                { value: 'RELATED_ABSTRACT', label: 'Related Abstract' },
                { value: 'OTHER', label: 'Other' },
              ],
            },
          },
        ],
      },
      {
        wrappers: ['form-row'],
        props: {
          formRowOptions: {
            spanIndexed: [24, 12, 12],
          },
        },
        fieldGroup: [
          {
            key: 'comment',
            type: 'textarea',
            props: {
              label: 'Additional Notes',
              required: false,
              minLength: 10,
            },
          },
          {
            type: 'cvc-cancel-button',
          },
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Source Linkage',
              align: 'right',
            },
          },
        ],
      },
    ],
  },
]

export const relatedSourceSuggestFields: FormlyFieldConfig[] = formFieldConfig
