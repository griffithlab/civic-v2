import { FormlyFieldConfig } from '@ngx-formly/core'
import { CvcTherapySelectFieldOptions } from '../types/therapy-select/therapy-select.type'
import { CvcGeneSelectFieldConfig } from '../types/gene-select/gene-select.type'
import { CvcLevelSelectFieldOptions } from '../types/level-select/level-select.type'
import { CvcOriginSelectFieldOptions } from '../types/origin-select/origin-select.type'
import { CvcRatingFieldOptions } from '../types/rating/rating.type'
import { CvcSourceSelectFieldConfig } from '../types/source-select/source-select.type'
import { CvcBaseInputFieldOptions } from '../types/tag-input/tag-input.type'
import { CvcVariantSelectFieldConfig } from '../types/variant-select/variant-select.type'
import { CvcFieldGridWrapperConfig } from '../wrappers/field-grid/field-grid.wrapper'
import { CvcMolecularProfileSelectFieldConfig } from '../types/molecular-profile-select/molecular-profile-select.type'

export const noStateFormsModel = {
  geneId: undefined,
}

export const noStateFormsFieldConfig: FormlyFieldConfig[] = [
  <CvcMolecularProfileSelectFieldConfig>{
    key: 'molecularProfileId',
    type: 'molecular-profile-select',
    props: {},
  },
  <CvcMolecularProfileSelectFieldConfig>{
    key: 'molecularProfileIds',
    type: 'molecular-profile-multi-select',
    props: {},
  },
  {
    wrappers: ['field-grid'],
    props: <CvcFieldGridWrapperConfig>{
      grid: {
        cols: 2,
      },
    },
    fieldGroup: [
      <CvcGeneSelectFieldConfig>{
        key: 'geneId',
        type: 'gene-select',
      },
      <CvcGeneSelectFieldConfig>{
        key: 'geneIds',
        type: 'gene-multi-select',
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
      <CvcVariantSelectFieldConfig>{
        key: 'variantId',
        type: 'variant-select',
        props: {
          requireGene: false,
        },
      },
      <CvcVariantSelectFieldConfig>{
        key: 'variantIds',
        type: 'variant-multi-select',
        props: {
          requireGene: false,
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
      <CvcSourceSelectFieldConfig>{
        key: 'sourceId',
        type: 'source-select',
        props: {},
      },
      <CvcSourceSelectFieldConfig>{
        key: 'sourceIds',
        type: 'source-multi-select',
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
        key: 'drugId',
        type: 'therapy-select',
        props: {},
      },
      <CvcTherapySelectFieldOptions>{
        key: 'drugIds',
        type: 'drug-multi-select',
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
        props: {},
      },
      <CvcLevelSelectFieldOptions>{
        key: 'evidenceLevel',
        type: 'level-multi-select',
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
      <CvcOriginSelectFieldOptions>{
        key: 'variantOrigin',
        type: 'origin-select',
        props: {},
      },
      <CvcOriginSelectFieldOptions>{
        key: 'variantOrigins',
        type: 'origin-multi-select',
        props: {},
      },
    ],
  },
  // {
  //   wrappers: ['field-grid'],
  //   props: <CvcFieldGridWrapperConfig>{
  //     grid: {
  //       cols: 2,
  //     },
  //   },
  //   fieldGroup: [
  //     <CvcBaseInputFieldOptions>{
  //       key: 'tag',
  //       type: 'tag-input',
  //       props: {
  //         label: 'Input Test',
  //       },
  //     },
  //     <CvcBaseInputFieldOptions>{
  //       key: 'tags',
  //       type: 'tag-multi-input',
  //       props: {
  //         label: 'Input Multi Test',
  //       },
  //     },
  //   ],
  // },
]
