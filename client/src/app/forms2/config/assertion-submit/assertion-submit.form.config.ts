import { assertionSubmitFormInitialModel } from '@app/forms2/models/assertion-submit.model'
import { CvcDiseaseSelectFieldOptions } from '@app/forms2/types/disease-select/disease-select.type'
import { CvcGeneSelectFieldConfig } from '@app/forms2/types/gene-select/gene-select.type'
import { CvcInteractionSelectFieldOptions } from '@app/forms2/types/interaction-select/interaction-select.type'
import { CvcOrgSubmitButtonFieldConfig } from '@app/forms2/types/org-submit-button/org-submit-button.type'
import { CvcSignificanceSelectFieldOptions } from '@app/forms2/types/significance-select/significance-select.type'
import { CvcTherapySelectFieldConfig } from '@app/forms2/types/therapy-select/therapy-select.type'
import { CvcEntityTypeSelectFieldConfig } from '@app/forms2/types/type-select/type-select.type'
import assignFieldConfigDefaultValues from '@app/forms2/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms2/wrappers/form-layout/form-layout.wrapper'
import { AssertionType } from '@app/generated/civic.apollo'
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

          <CvcEntityTypeSelectFieldConfig>{
            key: 'assertionType',
            type: 'type-select',
            props: {
              required: true,
              entityName: {
                singular: 'Assertion',
                plural: 'Assertions'
              }
            },
            defaultValue: AssertionType.Prognostic
          },
          <CvcSignificanceSelectFieldOptions>{
            key: 'significance',
            type: 'significance-select',
            props: {
              required: true,
            },
          },
          <CvcDiseaseSelectFieldOptions>{
            key: 'diseaseId',
            type: 'disease-select',
            props: {},
          },
          <CvcTherapySelectFieldConfig>{
            key: 'drugId',
            type: 'therapy-select',
            props: {
              required: true,
            },
          },
          <CvcInteractionSelectFieldOptions>{
            key: 'therapyInteractionType',
            type: 'interaction-select',
            props: {},
          },
          {
            key: 'evidenceItemIds',
            type: 'evidence-multi-select',
            props: {
              required: true,
              isMultiSelect: true,
              colSpan: 24
            },
          },
          // <CvcEntityTypeSelectFieldConfig>{
          //   key: 'assertionType',
          //   type: 'type-select',
          //   props: {
          //     required: true,
          //   },
          // },
          // <CvcEntitySignificanceSelectFieldConfig>{
          //   key: 'assertionSignficance',
          //   type: 'significance-select',
          //   props: {
          //     required: true,
          //   },
          // },
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
