import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  BooleanSearchInput,
  InputMaybe,
  IntSearchInput,
  SourceSearchFilter,
  SourceSourceTypeSearchInput,
  StringSearchInput,
} from '@generated/civic.apollo'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'

export type SourceSearchFilterREF = {
  abstract?: InputMaybe<StringSearchInput>
  booleanOperator?: InputMaybe<BooleanOperator>
  citation?: InputMaybe<StringSearchInput>
  citationId?: InputMaybe<StringSearchInput>
  id?: InputMaybe<IntSearchInput>
  isRetracted?: InputMaybe<BooleanSearchInput>
  journal?: InputMaybe<StringSearchInput>
  sourceType?: InputMaybe<SourceSourceTypeSearchInput>
  subFilters?: InputMaybe<Array<SourceSearchFilter>>
  title?: InputMaybe<StringSearchInput>
}
export const searchSourcesDefaultKey = 'journal'
export const searchSourcesFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByKey([
      ...withStatic([
        {
          key: 'journal',
          props: { label: 'Journal' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
      ]),
    ])
  )
