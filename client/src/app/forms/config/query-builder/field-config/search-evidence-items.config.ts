import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByKey,
  withHideExpression,
  withRecursive,
  withStatic,
} from '@app/forms/config/query-builder/field-config/functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'
import {
  AssertionSearchFilter,
  BooleanOperator,
  BooleanSearchInput,
  CommentSearchFilter,
  DiseaseSearchFilter,
  EvidenceDirectionTypeSearchInput,
  EvidenceItemSearchFilter,
  EvidenceLevelTypeSearchInput,
  EvidenceSignificanceTypeSearchInput,
  EvidenceStatusTypeSearchInput,
  EvidenceTypeTypeSearchInput,
  InputMaybe,
  IntSearchInput,
  MolecularProfileSearchFilter,
  PhenotypeSearchFilter,
  RevisionSearchFilter,
  SourceSearchFilter,
  StringSearchInput,
  TherapyInteractionTypeSearchInput,
  TherapySearchFilter,
  UserSearchFilter,
} from '@generated/civic.apollo'

export type EvidenceItemSearchFilterREF = {
  assertion?: InputMaybe<AssertionSearchFilter>
  booleanOperator?: InputMaybe<BooleanOperator>
  comment?: InputMaybe<CommentSearchFilter>
  creatingUser?: InputMaybe<UserSearchFilter>
  description?: InputMaybe<StringSearchInput>
  disease?: InputMaybe<DiseaseSearchFilter>
  evidenceDirection?: InputMaybe<EvidenceDirectionTypeSearchInput>
  evidenceLevel?: InputMaybe<EvidenceLevelTypeSearchInput>
  evidenceRating?: InputMaybe<IntSearchInput>
  evidenceType?: InputMaybe<EvidenceTypeTypeSearchInput>
  id?: InputMaybe<IntSearchInput>
  isFlagged?: InputMaybe<BooleanSearchInput>
  moderatingUser?: InputMaybe<UserSearchFilter>
  molecularProfile?: InputMaybe<MolecularProfileSearchFilter>
  openRevisionCount?: InputMaybe<IntSearchInput>
  phenotypes?: InputMaybe<PhenotypeSearchFilter>
  revisions?: InputMaybe<RevisionSearchFilter>
  significance?: InputMaybe<EvidenceSignificanceTypeSearchInput>
  source?: InputMaybe<SourceSearchFilter>
  status?: InputMaybe<EvidenceStatusTypeSearchInput>
  subFilters?: InputMaybe<Array<EvidenceItemSearchFilter>>
  therapies?: InputMaybe<TherapySearchFilter>
  therapyInteractionType?: InputMaybe<TherapyInteractionTypeSearchInput>
}
export const searchEvidenceItemsDefaultKey = 'description'

export const searchEvidenceItemsFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByKey([
      ...withStatic([
        {
          key: 'ampLevel',
          props: { label: 'AMP Level' },
          fieldGroup: INPUT_FIELD_CONFIG['AmpLevelTypeSearchInput'],
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
          key: 'evidenceLevel',
          props: { label: 'Evidence Level' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceLevelTypeSearchInput'],
        },
        {
          key: 'evidenceType',
          props: { label: 'Evidence Type' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceTypeTypeSearchInput'],
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
          key: 'name',
          props: { label: 'Name' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'openRevisionCount',
          props: { label: 'Open Revision Count' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
        {
          key: 'status',
          props: { label: 'Status' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceStatusTypeSearchInput'],
        },
        {
          key: 'significance',
          props: { label: 'Significance' },
          fieldGroup: INPUT_FIELD_CONFIG['EvidenceSignificanceTypeSearchInput'],
        },
        {
          key: 'therapyInteractionType',
          props: { label: 'Therapy Interaction Type' },
          fieldGroup: INPUT_FIELD_CONFIG['TherapyInteractionTypeSearchInput'],
        },
      ]),
      ...withRecursive(
        getQueryFieldConfig('assertion', 'searchAssertions', 'Assertion')
      ),
      ...withRecursive(
        getQueryFieldConfig('creatingUser', 'searchUsers', 'Creating User')
      ),
      // ...withRecursive(
      //   getQueryFieldConfig('comment', 'searchComments', 'Comments')
      // ),
      ...withRecursive(
        getQueryFieldConfig('disease', 'searchDiseases', 'Disease')
      ),
      ...withRecursive(
        getQueryFieldConfig(
          'molecularProfile',
          'searchMolecularProfiles',
          'Molecular Profile'
        )
      ),
      ...withRecursive(
        getQueryFieldConfig('moderatingUser', 'searchUsers', 'Moderating User')
      ),
      ...withRecursive(
        getQueryFieldConfig('phenotypes', 'searchPhenotypes', 'Phenotypes')
      ),
      ...withRecursive(
        getQueryFieldConfig('therapies', 'searchTherapies', 'Therapies')
      ),
      // ...withRecursive(
      //   getQueryFieldConfig('revisions', 'searchRevisions', 'Revisions')
      // ),
      ...withRecursive(
        getQueryFieldConfig('sources', 'searchSources', 'Sources')
      ),
    ])
  )
