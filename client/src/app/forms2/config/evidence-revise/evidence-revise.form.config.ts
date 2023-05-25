import { evidenceReviseFormInitialModel } from '@app/forms2/models/evidence-revise.model'
import { CvcDirectionSelectFieldOptions } from '@app/forms2/types/direction-select/direction-select.type'
import { CvcDiseaseSelectFieldOptions } from '@app/forms2/types/disease-select/disease-select.type'
import { CvcInteractionSelectFieldOptions } from '@app/forms2/types/interaction-select/interaction-select.type'
import { CvcLevelSelectFieldOptions } from '@app/forms2/types/level-select/level-select.type'
import { CvcMolecularProfileSelectFieldConfig } from '@app/forms2/types/molecular-profile-select/molecular-profile-select.type'
import { CvcOriginSelectFieldOptions } from '@app/forms2/types/origin-select/origin-select.type'
import { CvcPhenotypeSelectFieldOptions } from '@app/forms2/types/phenotype-select/phenotype-select.type'
import { CvcRatingFieldOptions } from '@app/forms2/types/rating/rating.type'
import { CvcSignificanceSelectFieldOptions } from '@app/forms2/types/significance-select/significance-select.type'
import { CvcSourceSelectFieldOptions } from '@app/forms2/types/source-select/source-select.type'
import { CvcTherapySelectFieldOptions } from '@app/forms2/types/therapy-select/therapy-select.type'
import { CvcEntityTypeSelectFieldConfig } from '@app/forms2/types/type-select/type-select.type'
import assignFieldConfigDefaultValues from '@app/forms2/utilities/assign-field-default-values'
import { CvcFieldGridWrapperConfig } from '@app/forms2/wrappers/field-grid/field-grid.wrapper'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms2/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  // form-layout wrapper embeds the form in an nz-grid row, allowing the form to be placed adjacent to other controls or page elements. Currently, it provides a toggleable dev panel. Could be used to add a preview of the entity being added/edited, or more extensive feedback like lists of similar entities, etc.
  {
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
      submitLabel: 'Revise Evidence Item',
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
          title: 'Revise Evidence Item',
        },
        fieldGroup: [
          // field-grid wrapper places its fields in a css-grid, allowing for a wider variety of row-level layouts. Currently it provides multi-column layout of 2-4 columns
          // {
          //   wrappers: ['field-grid'],
          //   props: <CvcFieldGridWrapperConfig>{
          //     grid: {
          //       cols: 2,
          //     },
          //   },
          //   fieldGroup: [
          //     <CvcGeneSelectFieldConfig>{
          //       key: 'geneId',
          //       type: 'gene-select',
          //       props: {
          //         required: true,
          //       },
          //     },
          //     <CvcVariantSelectFieldOption>{
          //       key: 'variantId',
          //       type: 'variant-select',
          //       props: {
          //         required: true,
          //         // requireGene: false
          //       },
          //     },
          //   ],
          // },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: 2,
              },
            },
            fieldGroup: [
              <CvcMolecularProfileSelectFieldConfig>{
                key: 'molecularProfileId',
                type: 'molecular-profile-select',
                props: {
                  required: true,
                },
              },
            ],
          },
          <CvcSourceSelectFieldOptions>{
            key: 'sourceId',
            type: 'source-select',
            props: { required: true },
          },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: 2,
              },
            },
            fieldGroup: [
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
                  formMode: 'revise'
                },
              },
            ],
          },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: 2,
              },
            },
            fieldGroup: [
              <CvcSignificanceSelectFieldOptions>{
                key: 'significance',
                type: 'significance-select',
                props: {
                  required: true,
                  formMode: 'revise'
                },
              },
              <CvcDiseaseSelectFieldOptions>{
                key: 'diseaseId',
                type: 'disease-select',
                props: {},
              },
            ],
          },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: 2,
              },
            },
            fieldGroup: [
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
            ],
          },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: 2,
              },
            },
            fieldGroup: [
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
            ],
          },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: 2,
              },
            },
            fieldGroup: [
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
            ],
          },
          {
            wrappers: ['field-grid'],
            props: <CvcFieldGridWrapperConfig>{
              grid: {
                cols: '1-2',
              },
            },
            fieldGroup: [
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
                  colSpan: 24
                },
              },
            ],
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
              submitLabel: 'Submit Evidence Item Revisions',
            },
          },
        ],
      },
    ],
  },
]
export const evidenceReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    evidenceReviseFormInitialModel
  )
