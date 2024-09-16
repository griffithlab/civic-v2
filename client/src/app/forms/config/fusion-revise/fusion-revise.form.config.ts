import { fusionReviseFormInitialModel } from '@app/forms/models/fusion-revise.model'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms/wrappers/form-layout/form-layout.wrapper'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
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
          formCardOptions: { title: 'Revise Fusion' },
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
                key: 'aliases',
                type: 'tag-multi-input',
                props: {
                  label: 'Aliases',
                  description:
                    'List any aliases commonly used to refer to this Fusion',
                  placeholder: 'Enter Alias and hit return',
                },
              },
              {
                key: 'description',
                type: 'base-textarea',
                wrappers: ['form-field'],
                props: {
                  tooltip:
                    'User-defined summary of the clinical relevance of this Fusion.',
                  placeholder: 'Enter a Fusion Summary',
                  label: 'Summary',
                  required: false,
                  rows: 5,
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
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Fusion Revisions',
              align: 'right',
            },
          },
        ],
      },
    ],
  },
]
export const fusionReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(formFieldConfig, fusionReviseFormInitialModel)
