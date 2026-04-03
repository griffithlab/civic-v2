import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByLabel,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'
import { SELECT_FIELD_CONFIG } from './input-config/search-select.config'

export const searchPhenotypesDefaultKey = 'name'
export const searchPhenotypesFieldOptions: FormlyFieldConfig[] =
  withHideExpression([
    // place 'specific entity' filter (selects specific id) at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Specific Phenotype' },
        fieldGroup: SELECT_FIELD_CONFIG['PhenotypeIdSelect'],
      },
    ]),
    ...sortByLabel([
      ...withStatic([
        {
          key: 'name',
          props: {
            label: 'Name',
          },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'description',
          props: {
            label: 'Description',
          },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'hpoid',
          props: { label: 'Disease Ontology ID' },
          fieldGroup: INPUT_FIELD_CONFIG['OntologyTermSearchInput'],
        },
      ]),
    ]),
  ])
