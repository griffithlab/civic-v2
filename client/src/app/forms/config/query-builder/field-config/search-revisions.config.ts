import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'
import { INPUT_FIELD_CONFIG } from './input-config/search-input.config'
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
    sortByKey([
      ...withStatic([
        {
          key: 'fieldName',
          props: { label: 'Field Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
      ]),
    ])
  )
