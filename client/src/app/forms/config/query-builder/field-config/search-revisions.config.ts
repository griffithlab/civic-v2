import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { INPUT_FIELD_CONFIG } from './input-config/search-input.config'
import { getQueryFieldConfig } from './functions/get-query-field-config'
import {
  BooleanOperator,
  DateSearchInput,
  InputMaybe,
  IntSearchInput,
  ModeratedEntitiesTypeSearchInput,
  RevisionSearchFilter,
  RevisionStatusSearchInput,
  StringSearchInput,
  UserSearchFilter,
} from '@generated/civic.apollo'

export type RevisionSearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  createdAt?: InputMaybe<DateSearchInput>
  creatingUser?: InputMaybe<UserSearchFilter>
  fieldName?: InputMaybe<StringSearchInput>
  moderatingUser?: InputMaybe<UserSearchFilter>
  status?: InputMaybe<RevisionStatusSearchInput>
  subFilters?: InputMaybe<Array<RevisionSearchFilter>>
  subjectId?: InputMaybe<IntSearchInput>
  subjectType?: InputMaybe<ModeratedEntitiesTypeSearchInput>
}

export const searchRevisionsDefaultKey = 'fieldName'
export const searchRevisionsFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByLabel([
      ...withStatic([
        {
          key: 'fieldName',
          props: { label: 'Field Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'status',
          props: { label: 'Status' },
          fieldGroup: INPUT_FIELD_CONFIG['RevisionStatusTypeSearchInput'],
        },
        {
          key: 'subjectId',
          props: { label: 'Subject ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'subjectType',
          props: { label: 'Subject Type' },
          fieldGroup: INPUT_FIELD_CONFIG['ModeratedEntitiesTypeSearchInput'],
        },
      ]),
      ...withRecursive([
        ...getQueryFieldConfig('creatingUser', 'searchUsers', 'Creating User'),
        ...getQueryFieldConfig(
          'moderatingUser',
          'searchUsers',
          'Moderating User'
        ),
        ...getQueryFieldConfig('comment', 'searchComments', 'Comments'),
      ]),
    ])
  )
