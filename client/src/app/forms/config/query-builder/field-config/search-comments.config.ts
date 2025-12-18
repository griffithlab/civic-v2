import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'
import { INPUT_FIELD_CONFIG } from './input-config/search-input.config'
import {
  BooleanOperator,
  CommentSearchFilter,
  DateSearchInput,
  InputMaybe,
  IntSearchInput,
  StringSearchInput,
} from '@generated/civic.apollo'

export type CommentSearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  comment?: InputMaybe<StringSearchInput>
  createdAt?: InputMaybe<DateSearchInput>
  id?: InputMaybe<IntSearchInput>
  subFilters?: InputMaybe<Array<CommentSearchFilter>>
}

export const searchCommentsDefaultKey = 'comment'
export const searchCommentsFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByKey([
      ...withStatic([
        {
          key: 'comment',
          props: { label: 'Comment' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
      ]),
    ])
  )
