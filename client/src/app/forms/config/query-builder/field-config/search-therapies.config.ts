import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  BooleanSearchInput,
  InputMaybe,
  IntSearchInput,
  OntologyTermSearchInput,
  StringSearchInput,
  TherapySearchFilter,
} from '@generated/civic.apollo'
import {
  sortByLabel,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'
import { SELECT_FIELD_CONFIG } from './input-config/search-select.config'

export type TherapySearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  deprecated?: InputMaybe<BooleanSearchInput>
  id?: InputMaybe<IntSearchInput>
  name?: InputMaybe<StringSearchInput>
  ncitId?: InputMaybe<OntologyTermSearchInput>
  subFilters?: InputMaybe<Array<TherapySearchFilter>>
  therapyAliases?: InputMaybe<StringSearchInput>
}
export const searchTherapiesFieldOptions: FormlyFieldConfig[] =
  withHideExpression([
    // place 'specific entity' filter (selects specific id) at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Specific Therapy' },
        fieldGroup: SELECT_FIELD_CONFIG['TherapyIdSelect'],
      },
    ]),
    // other fields sorted alphabetically
    ...sortByLabel([
      ...withStatic([
        {
          key: 'name',
          props: { label: 'Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'therapyAliases',
          props: { label: 'Alias' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'deprecated',
          props: { label: 'Deprecation Status' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'ncitId',
          props: { label: 'NCIT ID' },
          fieldGroup: INPUT_FIELD_CONFIG['OntologyTermSearchInput'],
        },
      ]),
    ]),
  ])
