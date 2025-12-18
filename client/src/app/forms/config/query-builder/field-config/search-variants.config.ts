import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  BooleanSearchInput,
  CommentSearchFilter,
  CoordinateSearchInput,
  FeatureSearchFilter,
  InputMaybe,
  IntSearchInput,
  MolecularProfileSearchFilter,
  RevisionSearchFilter,
  StringSearchInput,
  UserSearchFilter,
  VariantDeprecationReasonTypeSearchInput,
  VariantSearchFilter,
  VariantTypeSearchFilter,
} from '@generated/civic.apollo'

export type VariantSearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  comment?: InputMaybe<CommentSearchFilter>
  coordinates?: InputMaybe<CoordinateSearchInput>
  creatingUser?: InputMaybe<UserSearchFilter>
  deprecatingUser?: InputMaybe<UserSearchFilter>
  deprecationReason?: InputMaybe<VariantDeprecationReasonTypeSearchInput>
  feature?: InputMaybe<FeatureSearchFilter>
  id?: InputMaybe<IntSearchInput>
  isDeprecated?: InputMaybe<BooleanSearchInput>
  isFlagged?: InputMaybe<BooleanSearchInput>
  molecularProfile?: InputMaybe<MolecularProfileSearchFilter>
  name?: InputMaybe<StringSearchInput>
  openRevisionCount?: InputMaybe<IntSearchInput>
  revisions?: InputMaybe<RevisionSearchFilter>
  singleVariantMolecularProfile?: InputMaybe<MolecularProfileSearchFilter>
  subFilters?: InputMaybe<Array<VariantSearchFilter>>
  variantAlias?: InputMaybe<StringSearchInput>
  variantType?: InputMaybe<VariantTypeSearchFilter>
}
export const searchVariantsDefaultKey = 'name'
export const searchVariantsFieldOptions: FormlyFieldConfig[] = [
  {
    key: 'name',
    props: { label: 'Name' },
    fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
]
