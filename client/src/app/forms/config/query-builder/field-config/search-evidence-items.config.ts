import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByKey,
  withExpressions,
  withRecursive,
  withStatic,
} from '@app/forms/config/query-builder/field-config/functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'

export const searchEvidenceItemsDefaultKey = 'description'

export const searchEvidenceItemsFieldOptions: FormlyFieldConfig[] =
  withExpressions(
    sortByKey([
      ...withStatic([
        {
          key: 'name',
          props: { label: 'Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'description',
          props: { label: 'Description' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'evidenceDirection',
          props: { label: 'Evidence Direction' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceDirectionTypeSearchInput'],
        },
        {
          key: 'evidenceRating',
          props: { label: 'Evidence Rating' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'id',
          props: { label: 'ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'status',
          props: { label: 'Status' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceStatusTypeSearchInput'],
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
      ]),
      ...withRecursive(
        getQueryFieldConfig('disease', 'searchDiseases', 'Disease')
      ),
    ])
  )
