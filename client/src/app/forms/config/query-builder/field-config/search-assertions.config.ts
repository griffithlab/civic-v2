import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByLabel,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { INPUT_FIELD_CONFIG } from './input-config/search-input.config'
import { getQueryFieldConfig } from './functions/get-query-field-config'

export const searchAssertionsFieldOptions: FormlyFieldConfig[] =
  withHideExpression([
    // place 'specific entity' filter (selects specific id) at top of options
    ...withStatic([
      {
        key: 'id',
        props: { label: 'Assertion ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
      },
    ]),
    // other fields sorted alphabetically
    ...sortByLabel([
      ...withStatic([
        {
          key: 'ampLevel',
          props: { label: 'AMP Level' },
          fieldGroup: INPUT_FIELD_CONFIG['AmpLevelTypeSearchInput'],
        },
        {
          key: 'assertionDirection',
          props: { label: 'Assertion Direction' },
          fieldGroup: INPUT_FIELD_CONFIG['AssertionDirectionTypeSearchInput'],
        },
        {
          key: 'assertionType',
          props: { label: 'Assertion Type' },
          fieldGroup: INPUT_FIELD_CONFIG['AssertionTypeTypeSearchInput'],
        },
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
          key: 'evidenceItemCount',
          props: { label: 'Evidence Rating' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'fdaCompanionTest',
          props: { label: 'FDA Companion Test' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'isFlagged',
          props: { label: 'Flagged Status' },
          fieldGroup: INPUT_FIELD_CONFIG['FlaggedSearchInput'],
        },
        {
          key: 'regulatoryApproval',
          props: { label: 'Regulatory Approval' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
        },
        {
          key: 'significance',
          props: { label: 'Significance' },
          fieldGroup:
            INPUT_FIELD_CONFIG['AssertionSignificanceTypeSearchInput'],
        },
        {
          key: 'status',
          props: { label: 'Status' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceStatusTypeSearchInput'],
        },
        {
          key: 'variantOrigin',
          props: { label: 'Variant Origin' },
          fieldGroup: INPUT_FIELD_CONFIG['VariantOriginTypeSearchInput'],
        },
      ]),
      ...withRecursive([
        ...getQueryFieldConfig('creatingUser', 'searchUsers', 'Creating User'),
        ...getQueryFieldConfig(
          'moderatingUser',
          'searchUsers',
          'Moderating User'
        ),
        ...getQueryFieldConfig('disease', 'searchDiseases', 'Disease'),
        ...getQueryFieldConfig(
          'evidenceItems',
          'searchEvidenceItems',
          'Evidence Items'
        ),
        ...getQueryFieldConfig(
          'molecularProfile',
          'searchMolecularProfiles',
          'Molecular Profile'
        ),
        ...getQueryFieldConfig('phenotypes', 'searchPhenotypes', 'Phenotypes'),
        ...getQueryFieldConfig('revisions', 'searchRevisions', 'Revisions'),
        ...getQueryFieldConfig('therapies', 'searchTherapies', 'Therapies'),
        ...getQueryFieldConfig('comment', 'searchComments', 'Comments'),
      ]),
    ]),
  ])
