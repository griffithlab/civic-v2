import { evidenceReviseFormInitialModel } from '@app/forms2/models/evidence-revise.model'
import { CvcDiseaseSelectFieldOptions } from '@app/forms2/types/disease-select/disease-select.type'
import { CvcTherapySelectFieldOptions } from '@app/forms2/types/drug-select/drug-select.type'
import { CvcGeneSelectFieldConfig } from '@app/forms2/types/gene-select/gene-select.type'
import { CvcMolecularProfileSelectFieldConfig } from '@app/forms2/types/molecular-profile-select/molecular-profile-select.type'
import { CvcEntityTypeSelectFieldConfig } from '@app/forms2/types/type-select/type-select.type'
import { CvcVariantSelectFieldOptions } from '@app/forms2/types/variant-select/variant-select.type'
import assignFieldConfigDefaultValues from '@app/forms2/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms2/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  {
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
      submitLabel: 'Suggest Evidence Item Revision',
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
          title: 'Revise Evidence Item',
        },
        fieldGroup: [
          <CvcDiseaseSelectFieldOptions>{
            key: 'diseaseId',
            type: 'disease-select',
            props: {},
          },
          <CvcMolecularProfileSelectFieldConfig>{
            key: 'molecularProfileId',
            type: 'molecular-profile-select',
            props: {
              required: true,
            },
          },
          <CvcEntityTypeSelectFieldConfig>{
            key: 'evidenceType',
            type: 'type-select',
            props: {
              required: true,
            },
          },
          <CvcTherapySelectFieldOptions>{
            key: 'drugIds',
            type: 'drug-multi-select',
            props: {
              required: true,
            },
          },
          <CvcGeneSelectFieldConfig>{
            key: 'geneId',
            type: 'gene-select',
            props: {
              required: true,
            },
          },
          <CvcVariantSelectFieldOptions>{
            key: 'variantId',
            type: 'variant-select',
            props: {
              required: true,
              // requireGene: false
            },
          },
          // <CvcRepeatFieldConfig>{
          //   key: 'geneIds',
          //   type: 'repeat-field',
          //   props: {
          //     label: 'Genes',
          //   },
          //   fieldArray: <CvcGeneSelectFieldConfig>{
          //     type: 'gene-select-item',
          //     props: {},
          //   },
          // },
          // <CvcRepeatFieldConfig>{
          //   key: 'variantIds',
          //   type: 'repeat-field',
          //   props: {
          //     label: 'Variants',
          //   },
          //   fieldArray: <CvcVariantSelectFieldConfig>{
          //     type: 'variant-select-item',
          //     props: {},
          //   },
          // },
          // <CvcRepeatFieldConfig>{
          //   key: 'drugIds',
          //   type: 'repeat-field',
          //   props: {
          //     label: 'Therapies',
          //   },
          //   fieldArray: <CvcTherapySelectFieldConfig>{
          //     type: 'drug-select-item',
          //     props: {},
          //   },
          // },
          // <CvcBaseInputFieldConfig>{
          //   key: 'version',
          //   type: 'tag-input',
          //   props: { label: 'Version' },
          // },
          // <CvcRepeatFieldConfig>{
          //   key: 'aliases',
          //   type: 'repeat-field',
          //   props: {
          //     label: 'Aliases',
          //   },
          //   fieldArray: <CvcBaseInputFieldConfig>{
          //     type: 'tag-input-item',
          //     props: {},
          //   },
          // },
          // <CvcEntitySignificanceSelectFieldConfig>{
          //   key: 'clinicalSignficance',
          //   type: 'significance-select',
          //   props: {
          //     required: true,
          //   },
          // },
          // <CvcEvidenceDirectionSelectFieldConfig>{
          //   key: 'evidenceDirection',
          //   type: 'direction-select',
          //   props: {
          //     required: true,
          //   },
          // },
          // <CvcRepeatFieldConfig>{
          //   key: 'geneIds',
          //   type: 'repeat-field',
          //   props: {
          //     label: 'Genes',
          //   },
          //   fieldArray: <CvcGeneSelectFieldConfig>{
          //     type: 'gene-select-item',
          //     props: {},
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
export const evidenceReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    evidenceReviseFormInitialModel
  )
