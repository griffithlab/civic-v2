import { evidenceSubmitFormInitialModel } from '@app/forms/models/evidence-submit.model'
import { CvcDirectionSelectFieldOptions } from '@app/forms/types/direction-select/direction-select.type'
import { CvcDiseaseSelectFieldOptions } from '@app/forms/types/disease-select/disease-select.type'
import { CvcInteractionSelectFieldOptions } from '@app/forms/types/interaction-select/interaction-select.type'
import { CvcLevelSelectFieldOptions } from '@app/forms/types/level-select/level-select.type'
import { CvcOriginSelectFieldOptions } from '@app/forms/types/origin-select/origin-select.type'
import { CvcPhenotypeSelectFieldOptions } from '@app/forms/types/phenotype-select/phenotype-select.type'
import { CvcRatingFieldOptions } from '@app/forms/types/rating/rating.type'
import { CvcSignificanceSelectFieldOptions } from '@app/forms/types/significance-select/significance-select.type'
import { CvcSourceSelectFieldOptions } from '@app/forms/types/source-select/source-select.type'
import { CvcTherapySelectFieldOptions } from '@app/forms/types/therapy-select/therapy-select.type'
import { CvcEntityTypeSelectFieldConfig } from '@app/forms/types/type-select/type-select.type'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    // form-layout contains the form itself and and a hideable dev panel
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

      // form-card wraps the form fields in a card, providing a
      // place to put a title, and other controls e.g. form options, status
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          formCardOptions: {
            title: 'New Evidence Item',
          },
        },
        fieldGroup: [
          {
            key: 'molecularProfileId',
            type: 'molecular-profile-select',
            props: {
              required: true,
              tooltip:
                'A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated evidence.',
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
              description:
                'Data constituting personal or identifying information should not be entered (e.g. <a href="https://www.hipaajournal.com/what-is-protected-health-information/" target="_blank">protected health information (PHI) as defined by HIPAA</a> in the U.S. and/or comparable laws in your jurisdiction).',
              label: 'Evidence Statement',
              required: true,
              colSpan: 24,
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
