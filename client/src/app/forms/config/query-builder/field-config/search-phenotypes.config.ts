import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'

export const searchPhenotypesDefaultKey = 'name'
export const searchPhenotypesFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByKey([
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
          key: 'id',
          props: { label: 'ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'hpoid',
          props: { label: 'Disease Ontology ID' },
          fieldGroup: INPUT_FIELD_CONFIG['OntologyTermSearchInput'],
        },
      ]),
    ])
  )
