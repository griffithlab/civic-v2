import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByLabel,
  withHideExpression,
  withStatic,
} from '@app/forms/config/query-builder/field-config/functions/field-config-helpers'
import { SELECT_FIELD_CONFIG } from './input-config/search-select.config'

export const searchDiseasesDefaultKey = 'name'
export const searchDiseasesFieldOptions: FormlyFieldConfig[] =
  withHideExpression([
    // place 'specific entity' filter (selects specific id) at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Specific Disease' },
        fieldGroup: SELECT_FIELD_CONFIG['DiseaseIdSelect'],
      },
    ]),
    // other fields sorted alphabetically
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
          key: 'diseaseAliases',
          props: {
            label: 'Aliases',
          },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'doid',
          props: { label: 'Disease Ontology ID' },
          fieldGroup: INPUT_FIELD_CONFIG['OntologyTermSearchInput'],
        },
        {
          key: 'deprecated',
          props: { label: 'Deprecation Status' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
      ]),
    ]),
  ])
