import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'

export const searchMolecularProfilesFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByLabel([
      ...withStatic([
        {
          key: 'alias',
          props: { label: 'Alias' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'description',
          props: { label: 'Description' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'evidenceItemCount',
          props: { label: 'Evidence Item Count' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'id',
          props: { label: 'ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'isFlagged',
          props: { label: 'Is Flagged' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'hasAssertion',
          props: { label: 'Has Assertion' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'openRevisionCount',
          props: { label: 'Open Revision Count' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'score',
          props: { label: 'Score' },
          fieldGroup: INPUT_FIELD_CONFIG['FloatSearchInput'],
        },
      ]),
      ...withRecursive([
        ...getQueryFieldConfig('creatingUser', 'searchUsers', 'Creating User'),
        ...getQueryFieldConfig(
          'deprecatingUser',
          'searchUsers',
          'Deprecating User'
        ),
        ...getQueryFieldConfig('source', 'searchSources', 'Sources'),
      ]),
    ])
  )
