import { molecularProfileReviseFormInitialModel } from '@app/forms/models/molecular-profile-revise.model'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  // form-layout wrapper embeds the form in an nz-grid row, allowing the form to be placed adjacent to other controls or page elements. Currently, it provides a toggleable dev panel. Could be used to add a preview of the entity being added/edited, or more extensive feedback like lists of similar entities, etc.
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
      // form-card wraps the form fields in a card, providing a place to put a title, and other controls e.g. form options, status
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          formCardOptions: { title: 'Revise Evidence Item' },
        },
        fieldGroup: [
          {
            key: 'description',
            type: 'textarea',
            wrappers: ['form-field'],
            props: {
              placeholder: 'Enter a Molecular Profile Description',
              label: 'Molecular Profile Description',
              description:
                'Provide a summary of the clinical relevance of this Molecular Profile. The Molecular Profile Summary should be a synthesis of the existing Evidence Statements for this profile. Basic information on recurrence rates and biological/functional impact of the variants may be included, but the focus should be on the clinical impact (i.e. predictive, prognostic, diagnostic, or predisposing relevance).',
              required: false,
              rows: 5,
              colSpan: 24,
            },
          },
          {
            key: 'aliases',
            type: 'tag-multi-input',
            wrappers: ['form-field'],
            props: {
              label: 'Aliases',
              description:
                'List any aliases commonly used to refer to this Molecular Profile',
            },
          },
          {
            key: 'sourceIds',
            type: 'source-multi-select',
            wrappers: ['form-field'],
            props: {},
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
              placeholder: 'Please enter a comment describing your revisions.',
              required: true,
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
              submitLabel: 'Submit Molecular Profile Revisions',
            },
          },
        ],
      },
    ],
  },
]
export const molecularProfileReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    molecularProfileReviseFormInitialModel
  )
