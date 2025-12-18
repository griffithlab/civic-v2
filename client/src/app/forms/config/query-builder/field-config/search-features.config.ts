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
export const searchFeaturesDefaultKey = 'name'
export const searchFeaturesFieldOptions: FormlyFieldConfig[] = [
  {
    key: 'name',
    props: { label: 'Name' },
    fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
]
