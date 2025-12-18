import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  BooleanSearchInput,
  FeatureDeprecationReasonTypeSearchInput,
  FeatureInstanceTypesSearchInput,
  FeatureSearchFilter,
  InputMaybe,
  IntSearchInput,
  StringSearchInput,
  UserSearchFilter,
} from '@generated/civic.apollo'
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'

export type FeatureSearchFilterREF = {
  alias?: InputMaybe<StringSearchInput>
  booleanOperator?: InputMaybe<BooleanOperator>
  creatingUser?: InputMaybe<UserSearchFilter>
  deprecatingUser?: InputMaybe<UserSearchFilter>
  deprecationReason?: InputMaybe<FeatureDeprecationReasonTypeSearchInput>
  description?: InputMaybe<StringSearchInput>
  entrezId?: InputMaybe<IntSearchInput>
  entrezSymbol?: InputMaybe<StringSearchInput>
  featureInstanceType?: InputMaybe<FeatureInstanceTypesSearchInput>
  fivePrimePartnerEntrezId?: InputMaybe<IntSearchInput>
  fivePrimePartnerEntrezSymbol?: InputMaybe<StringSearchInput>
  hasAssertion?: InputMaybe<BooleanSearchInput>
  id?: InputMaybe<IntSearchInput>
  isDeprecated?: InputMaybe<BooleanSearchInput>
  isFlagged?: InputMaybe<BooleanSearchInput>
  ncitId?: InputMaybe<StringSearchInput>
  openRevisionCount?: InputMaybe<IntSearchInput>
  subFilters?: InputMaybe<Array<FeatureSearchFilter>>
  threePrimePartnerEntrezId?: InputMaybe<IntSearchInput>
  threePrimePartnerEntrezSymbol?: InputMaybe<StringSearchInput>
}
export const searchFeaturesDefaultKey = 'alias'
export const searchFeaturesFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByLabel([
      ...withStatic([
        {
          key: 'alias',
          props: { label: 'Alias' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'deprecationReason',
          props: { label: 'Deprecation Reason' },
          fieldGroup:
            INPUT_FIELD_CONFIG['FeatureDeprecationReasonTypeSearchInput'],
        },
        {
          key: 'entrezId',
          props: { label: 'Entrez ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'entrezSymbol',
          props: { label: 'Entrez Symbol' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'featureInstanceType',
          props: { label: 'Feature Instance Type' },
          fieldGroup: INPUT_FIELD_CONFIG['FeatureInstanceTypesSearchInput'],
        },
        {
          key: 'fivePrimePartnerEntrezId',
          props: { label: "5' Partner Entrez ID" },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'fivePrimePartnerEntrezSymbol',
          props: { label: "5' Partner Entrez Symbol" },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'hasAssertion',
          props: { label: 'Has Assertion' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'isDeprecated',
          props: { label: 'Is Deprecated' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'isFlagged',
          props: { label: 'Is Flagged' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'ncitId',
          props: { label: 'NCIT ID' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'openRevisionCount',
          props: { label: 'Open Revision Count' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'threePrimePartnerEntrezId',
          props: { label: "3' Partner Entrez ID" },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'threePrimePartnerEntrezSymbol',
          props: { label: "3' Partner Entrez Symbol" },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
      ]),
      ...withRecursive([
        ...getQueryFieldConfig('creatingUser', 'searchUsers', 'Creating User'),
        ...getQueryFieldConfig(
          'modifyingUser',
          'searchUsers',
          'Modifying User'
        ),
        ...getQueryFieldConfig(
          'deprecatingUser',
          'searchUsers',
          'Deprecating User'
        ),
      ]),
    ])
  )
