import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByKey,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { INPUT_FIELD_CONFIG } from './input-config/search-input.config'
import { getQueryFieldConfig } from './functions/get-query-field-config'
import {
  AmpLevelTypeSearchInput,
  AssertionDirectionTypeSearchInput,
  AssertionSearchFilter,
  AssertionSignificanceTypeSearchInput,
  AssertionTypeTypeSearchInput,
  BooleanOperator,
  BooleanSearchInput,
  DiseaseSearchFilter,
  EvidenceItemSearchFilter,
  EvidenceStatusTypeSearchInput,
  InputMaybe,
  IntSearchInput,
  MolecularProfileSearchFilter,
  PhenotypeSearchFilter,
  RevisionSearchFilter,
  StringSearchInput,
  TherapySearchFilter,
  UserSearchFilter,
  VariantOriginTypeSearchInput,
} from '@generated/civic.apollo'

type AssertionSearchFilterREF = {
  ampLevel?: InputMaybe<AmpLevelTypeSearchInput>
  assertionDirection?: InputMaybe<AssertionDirectionTypeSearchInput>
  assertionType?: InputMaybe<AssertionTypeTypeSearchInput>
  booleanOperator?: InputMaybe<BooleanOperator>
  creatingUser?: InputMaybe<UserSearchFilter>
  description?: InputMaybe<StringSearchInput>
  disease?: InputMaybe<DiseaseSearchFilter>
  evidenceItemCount?: InputMaybe<IntSearchInput>
  evidenceItems?: InputMaybe<EvidenceItemSearchFilter>
  fdaCompanionTest?: InputMaybe<BooleanSearchInput>
  id?: InputMaybe<IntSearchInput>
  isFlagged?: InputMaybe<BooleanSearchInput>
  moderatingUser?: InputMaybe<UserSearchFilter>
  molecularProfile?: InputMaybe<MolecularProfileSearchFilter>
  name?: InputMaybe<StringSearchInput>
  phenotypes?: InputMaybe<PhenotypeSearchFilter>
  regulatoryApproval?: InputMaybe<BooleanSearchInput>
  revisions?: InputMaybe<RevisionSearchFilter>
  significance?: InputMaybe<AssertionSignificanceTypeSearchInput>
  status?: InputMaybe<EvidenceStatusTypeSearchInput>
  subFilters?: InputMaybe<Array<AssertionSearchFilter>>
  therapies?: InputMaybe<TherapySearchFilter>
  variantOrigin?: InputMaybe<VariantOriginTypeSearchInput>
}
export const searchAssertionsDefaultKey = 'description'
export const searchAssertionsFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByKey([
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
          key: 'id',
          props: { label: 'ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'isFlagged',
          props: { label: 'Flagged Status' },
          fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
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
        //...getQueryFieldConfig('revisions', 'searchRevisions', 'Revisions')
        ...getQueryFieldConfig('therapies', 'searchTherapies', 'Therapies'),
      ]),
    ])
  )
