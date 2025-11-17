import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'

export function getSearchEvidenceItemsFieldOptions(): FormlyFieldConfig[] {
  return [
    {
      key: 'name',
      props: { label: 'Name' },
      fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
    },
    // ...getFieldConfig(
    //   'diseases',
    //   'searchDiseases',
    //   'query-subfilter-card',
    //   'Diseases matching all/any of the following'
    // ),
    // {
    //   key: 'disease',
    //   props: { label: 'Disease' },
    //   fieldGroup: getFieldOptions('searchDiseases'),
    // },
  ]
}
// export type EvidenceItemSearchFilter = {
//   assertion?: InputMaybe<AssertionSearchFilter>;
//   booleanOperator?: InputMaybe<BooleanOperator>;
//   comment?: InputMaybe<CommentSearchFilter>;
//   creatingUser?: InputMaybe<UserSearchFilter>;
//   description?: InputMaybe<StringSearchInput>;
//   disease?: InputMaybe<DiseaseSearchFilter>;
//   evidenceDirection?: InputMaybe<EvidenceDirectionTypeSearchInput>;
//   evidenceLevel?: InputMaybe<EvidenceLevelTypeSearchInput>;
//   evidenceRating?: InputMaybe<IntSearchInput>;
//   evidenceType?: InputMaybe<EvidenceTypeTypeSearchInput>;
//   id?: InputMaybe<IntSearchInput>;
//   isFlagged?: InputMaybe<BooleanSearchInput>;
//   moderatingUser?: InputMaybe<UserSearchFilter>;
//   molecularProfile?: InputMaybe<MolecularProfileSearchFilter>;
//   openRevisionCount?: InputMaybe<IntSearchInput>;
//   phenotypes?: InputMaybe<PhenotypeSearchFilter>;
//   revisions?: InputMaybe<RevisionSearchFilter>;
//   significance?: InputMaybe<EvidenceSignificanceTypeSearchInput>;
//   source?: InputMaybe<SourceSearchFilter>;
//   status?: InputMaybe<EvidenceStatusTypeSearchInput>;
//   subFilters?: InputMaybe<Array<EvidenceItemSearchFilter>>;
//   therapies?: InputMaybe<TherapySearchFilter>;
//   therapyInteractionType?: InputMaybe<TherapyInteractionTypeSearchInput>;
// };
