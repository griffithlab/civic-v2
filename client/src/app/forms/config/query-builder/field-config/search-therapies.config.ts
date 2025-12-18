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
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'

export type TherapySearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  deprecated?: InputMaybe<BooleanSearchInput>
  id?: InputMaybe<IntSearchInput>
  name?: InputMaybe<StringSearchInput>
  ncitId?: InputMaybe<OntologyTermSearchInput>
  subFilters?: InputMaybe<Array<TherapySearchFilter>>
  therapyAliases?: InputMaybe<StringSearchInput>
}
export const searchTherapiesDefaultKey = 'name'
export const searchTherapiesFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByKey([
      ...withStatic([
        {
          key: 'name',
          props: { label: 'Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
      ]),
    ])
  )
