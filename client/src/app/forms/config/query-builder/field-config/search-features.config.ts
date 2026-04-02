import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'
import { SELECT_FIELD_CONFIG } from './input-config/search-select.config'

export const searchFeaturesFieldOptions: FormlyFieldConfig[] =
  withHideExpression([
    // place 'specific entity' filter (selects specific id) at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Specific Feature' },
        fieldGroup: SELECT_FIELD_CONFIG['FeatureIdSelect'],
      },
    ]),
    // other fields sorted alphabetically
    ...sortByLabel([
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
          props: { label: 'Deprecation Status' },
          fieldGroup: INPUT_FIELD_CONFIG['DeprecatedSearchInput'],
        },
        {
          key: 'isFlagged',
          props: { label: 'Flagged Status' },
          fieldGroup: INPUT_FIELD_CONFIG['FlaggedSearchInput'],
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
          'deprecatingUser',
          'searchUsers',
          'Deprecating User'
        ),
      ]),
    ]),
  ])
