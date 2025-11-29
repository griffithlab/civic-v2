import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByKey,
  withExpressions,
  withStatic,
} from '@app/forms/config/query-builder/field-config/functions/field-config-helpers'

export const searchDiseasesFieldOptions: FormlyFieldConfig[] = withExpressions(
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
        key: 'diseaseAliases',
        props: {
          label: 'Aliases',
        },
        fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
      },
      {
        key: 'id',
        props: { label: 'ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
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
  ])
)
