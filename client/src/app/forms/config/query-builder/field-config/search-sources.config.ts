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
  sortByLabel,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'
import { SELECT_FIELD_CONFIG } from './input-config/search-select.config'

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
  withHideExpression([
    // place 'specific entity' filter (selects specific id) at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Specific Source' },
        fieldGroup: SELECT_FIELD_CONFIG['SourceIdSelect'],
      },
    ]),
    ...sortByLabel([
      ...withStatic([
        {
          key: 'abstract',
          props: { label: 'Abstract' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'citation',
          props: { label: 'Citation' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'citationId',
          props: { label: 'Citation ID' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'isRetracted',
          props: { label: 'Is Retracted' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'journal',
          props: { label: 'Journal' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'sourceType',
          props: { label: 'Source Type' },
          fieldGroup: INPUT_FIELD_CONFIG['SourceSourceTypeSearchInput'],
        },
        {
          key: 'title',
          props: { label: 'Title' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
      ]),
    ]),
  ])
