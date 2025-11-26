import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByKey,
  withRecursive,
  withStatic,
} from '@app/forms/config/query-builder/field-config/functions/field-config-helpers'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import { getFieldOptions } from '@app/forms/config/query-builder/field-config/functions/get-field-options'

export const searchEvidenceItemsFieldOptions: FormlyFieldConfig[] = sortByKey([
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
      props: { label: 'Item Status' },
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
  // recursive field stubs, will be replace by full
  // query at runtime in query-filter.ts OnInit
  ...withRecursive([
    {
      key: 'disease',
      wrappers: ['query-subfilters-card'],
      props: {
        label: 'Disease',
        // formSearchQuery: getSearchQuery(endpoint),
      },
      fieldGroup: [
        {
          key: 'booleanOperator',
          type: 'base-radio',
          wrappers: [],
          props: {
            required: true,
            size: 'small',
            type: 'button',
            options: getSelectOptions('BooleanOperator'),
          },
        },
        {
          key: 'subFilters',
          type: 'query-subfilters',
          wrappers: [],
          props: {
            filterEndpoint: 'searchDiseases',
          },
          fieldArray: (field) => ({
            type: 'query-filter',
            resetOnHide: true,
            props: {
              selectedKey: undefined,
              options: getFieldOptions('searchDiseases').map((opt) => ({
                label: opt.props?.label,
                value: opt.key,
              })),
            },
            fieldGroup: getFieldOptions(field.props!.filterEndpoint),
          }),
        },
        {
          key: 'createPermalink',
          wrappers: [],
        },
      ],
    },
  ]),
])
