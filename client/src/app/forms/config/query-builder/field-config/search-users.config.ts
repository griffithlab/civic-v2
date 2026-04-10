import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  CommentSearchFilter,
  DateSearchInput,
  InputMaybe,
  IntSearchInput,
  StringSearchInput,
} from '@generated/civic.apollo'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'

export type UserSearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  createdAt?: InputMaybe<DateSearchInput>
  id?: InputMaybe<IntSearchInput>
  name?: InputMaybe<StringSearchInput>
  organizationId?: InputMaybe<IntSearchInput>
  organizationName?: InputMaybe<StringSearchInput>
  subFilters?: InputMaybe<Array<CommentSearchFilter>>
  username?: InputMaybe<StringSearchInput>
}

export const searchUsersDefaultKey = 'name'
export const searchUsersFieldOptions: FormlyFieldConfig[] = withHideExpression(
  sortByKey([
    ...withStatic([
      {
        key: 'name',
        props: { label: 'Name' },
        fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
      },
      {
        key: 'username',
        props: { label: 'User Name' },
        fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
      },
      {
        key: 'id',
        props: { label: 'User ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
      },
      {
        key: 'organizationName',
        props: { label: 'Organization Name' },
        fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
      },
      {
        key: 'organizationId',
        props: { label: 'Organization ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
      },
    ]),
  ])
)
