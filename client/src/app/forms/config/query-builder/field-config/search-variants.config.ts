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
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'

export type VariantSearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  comment?: InputMaybe<CommentSearchFilter> // needs searchComments endpoint
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

export const searchVariantsFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByLabel([
      ...withStatic([
        {
          key: 'name',
          props: { label: 'Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'variantAlias',
          props: { label: 'Variant Alias' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'variantType',
          props: { label: 'Variant Type' },
          fieldGroup: INPUT_FIELD_CONFIG['VariantTypeSearchFilter'],
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
          key: 'openRevisionCount',
          props: { label: 'Open Revision Count' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'id',
          props: { label: 'ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'createdAt',
          props: { label: 'Created At' },
          fieldGroup: INPUT_FIELD_CONFIG['DateTimeSearchInput'],
        },
        {
          key: 'updatedAt',
          props: { label: 'Updated At' },
          fieldGroup: INPUT_FIELD_CONFIG['DateTimeSearchInput'],
        },
        {
          key: 'deprecationReason',
          props: { label: 'Deprecation Reason' },
          fieldGroup:
            INPUT_FIELD_CONFIG['VariantDeprecationReasonTypeSearchInput'],
        },
        {
          key: 'coordinates',
          props: { label: 'Coordinates' },
          fieldGroup: INPUT_FIELD_CONFIG['CoordinateSearchInput'],
        },
        {
          key: 'singleVariantMolecularProfile',
          props: { label: 'Single Variant Molecular Profile' },
          fieldGroup: INPUT_FIELD_CONFIG['MolecularProfileSearchFilter'],
        },
      ]),
      ...withRecursive([
        ...getQueryFieldConfig('creatingUser', 'searchUsers', 'Creating User'),
        ...getQueryFieldConfig(
          'deprecatingUser',
          'searchUsers',
          'Deprecating User'
        ),
        ...getQueryFieldConfig('source', 'searchSources', 'Source'),
        ...getQueryFieldConfig('feature', 'searchFeatures', 'Feature'),
        ...getQueryFieldConfig(
          'molecularProfile',
          'searchMolecularProfiles',
          'Molecular Profile'
        ),
        // ...getQueryFieldConfig('comment', 'searchComments', 'Comments'),
        //...getQueryFieldConfig('revisions', 'searchRevisions', 'Revisions')
      ]),
    ])
  )
