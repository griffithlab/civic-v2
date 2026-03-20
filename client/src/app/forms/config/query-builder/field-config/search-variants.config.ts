import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'
import { getStructFieldConfig } from './functions/get-struct-field-config'
import { SELECT_FIELD_CONFIG } from './input-config/search-select.config'

export const searchVariantsFieldOptions: FormlyFieldConfig[] =
  withHideExpression([
    // place specific entity select at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Select Variant' },
        fieldGroup: SELECT_FIELD_CONFIG['VariantIdSelect'],
      },
    ]),
    // other fields sorted alphabetically
    ...sortByLabel([
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
          key: 'deprecationReason',
          props: { label: 'Deprecation Reason' },
          fieldGroup:
            INPUT_FIELD_CONFIG['VariantDeprecationReasonTypeSearchInput'],
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
        ...getQueryFieldConfig(
          'singleVariantMolecularProfile',
          'searchMolecularProfiles',
          'Single Variant Molecular Profile'
        ),
        ...getQueryFieldConfig('comment', 'searchComments', 'Comments'),
        ...getQueryFieldConfig('revisions', 'searchRevisions', 'Revisions'),
        ...getQueryFieldConfig(
          'variantType',
          'searchVariantTypes',
          'Variant Types'
        ),
      ]),
      ...getStructFieldConfig('coordinates', 'Coordinates'),
    ]),
  ])
