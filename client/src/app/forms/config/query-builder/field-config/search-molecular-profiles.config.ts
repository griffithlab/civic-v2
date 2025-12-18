import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  BooleanSearchInput,
  FloatSearchInput,
  InputMaybe,
  IntSearchInput,
  MolecularProfileSearchFilter,
  SourceSearchFilter,
  StringSearchInput,
  UserSearchFilter,
} from '@generated/civic.apollo'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'

export type MolecularProfileSearchFilterREF = {
  alias?: InputMaybe<StringSearchInput>
  booleanOperator?: InputMaybe<BooleanOperator>
  creatingUser?: InputMaybe<UserSearchFilter>
  deprecatingUser?: InputMaybe<UserSearchFilter>
  description?: InputMaybe<StringSearchInput>
  evidenceItemsCount?: InputMaybe<IntSearchInput>
  hasAssertion?: InputMaybe<BooleanSearchInput>
  id?: InputMaybe<IntSearchInput>
  isFlagged?: InputMaybe<BooleanSearchInput>
  openRevisionCount?: InputMaybe<IntSearchInput>
  score?: InputMaybe<FloatSearchInput>
  source?: InputMaybe<SourceSearchFilter>
  subFilters?: InputMaybe<Array<MolecularProfileSearchFilter>>
}
export const searchMolecularProfilesDefaultKey = 'name'
export const searchMolecularProfilesFieldOptions: FormlyFieldConfig[] =
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
