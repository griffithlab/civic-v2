import { evidenceSubmitFormInitialModel } from '@app/forms2/models/evidence-submit.model'
import { CvcDirectionSelectFieldOptions } from '@app/forms2/types/direction-select/direction-select.type'
import { CvcDiseaseSelectFieldOptions } from '@app/forms2/types/disease-select/disease-select.type'
import { CvcInteractionSelectFieldOptions } from '@app/forms2/types/interaction-select/interaction-select.type'
import { CvcLevelSelectFieldOptions } from '@app/forms2/types/level-select/level-select.type'
import { CvcOriginSelectFieldOptions } from '@app/forms2/types/origin-select/origin-select.type'
import { CvcPhenotypeSelectFieldOptions } from '@app/forms2/types/phenotype-select/phenotype-select.type'
import { CvcRatingFieldOptions } from '@app/forms2/types/rating/rating.type'
import { CvcSignificanceSelectFieldOptions } from '@app/forms2/types/significance-select/significance-select.type'
import { CvcSourceSelectFieldOptions } from '@app/forms2/types/source-select/source-select.type'
import { CvcTherapySelectFieldOptions } from '@app/forms2/types/therapy-select/therapy-select.type'
import { CvcEntityTypeSelectFieldConfig } from '@app/forms2/types/type-select/type-select.type'
import assignFieldConfigDefaultValues from '@app/forms2/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms2/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    // form-layout contains the form itself and and a hideable dev panel
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
      submitLabel: 'Submit Evidence Item',
      showDevPanel: false,
    },
    fieldGroup: [
      {
        key: 'clientMutationId',
        props: {
          hidden: true,
        },
      },

      // form-card wraps the form fields in a card, providing a
      // place to put a title, and other controls e.g. form options, status
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          title: 'New Evidence Item',
        },
        fieldGroup: [
          {
            key: 'molecularProfileId',
            type: 'molecular-profile-select',
            props: {
              required: true,
              tooltip: 'TEST TEST TEST TEST',
              helpText: 'This is the description of a molecular profile.',
              watchVariantMolecularProfileId: true,
            },
          },
          <CvcSourceSelectFieldOptions>{
            key: 'sourceId',
            type: 'source-select',
            props: { required: true },
          },
          <CvcEntityTypeSelectFieldConfig>{
            key: 'evidenceType',
            type: 'type-select',
            props: {
              required: true,
            },
          },
          <CvcDirectionSelectFieldOptions>{
            key: 'evidenceDirection',
            type: 'direction-select',
            props: {
              required: true,
            },
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
          <CvcLevelSelectFieldOptions>{
            key: 'evidenceLevel',
            type: 'level-select',
            props: {
              required: true,
            },
          },
          <CvcRatingFieldOptions>{
            key: 'rating',
            type: 'rating',
            props: {
              required: true,
            },
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
            key: 'description',
            type: 'textarea',
            wrappers: ['form-field'],
            props: {
              tooltip:
                'Your original description of evidence from published literature detailing the association or lack of association between a variant and its predictive, prognostic, diagnostic, predisposing, functional or oncogenic value. ',
              placeholder: 'Enter an Evidence Statement',
              extraType: 'description',
              description:
                'Data constituting personal or identifying information should not be entered (e.g. <a href="https://www.hipaajournal.com/what-is-protected-health-information/" target="_blank">protected health information (PHI) as defined by HIPAA</a> in the U.S. and/or comparable laws in your jurisdiction).',
              label: 'Evidence Statement',
              required: true,
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
              minLength: 10
            },
          },
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Evidence Item',
            },
          },
        ],
      },
    ],
  },
]
export const evidenceSubmitFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    evidenceSubmitFormInitialModel
  )
