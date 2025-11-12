import { QueryBuilderFilterOption } from '@app/forms/config/query-builder/query-builder.types'
import {
  BooleanOperator,
  BooleanSearchInput,
  InputMaybe,
  IntSearchInput,
  OntologyTermSearchInput,
  StringSearchInput,
} from '@app/generated/civic.apollo'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'

export const searchDiseasesFilterOptions: QueryBuilderFilterOption[] = [
  {
    key: 'name',
    label: 'Disease Name',
    fieldConfig: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
  {
    key: 'diseaseAliases',
    label: 'Disease Aliases',
    fieldConfig: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
  { key: 'id', label: 'ID', fieldConfig: INPUT_FIELD_CONFIG['IntSearchInput'] },
  {
    key: 'doid',
    label: 'Disease Ontology ID',
    fieldConfig: INPUT_FIELD_CONFIG['OntologyTermSearchInput'],
  },
  {
    key: 'deprecated',
    label: 'Deprecation Status',
    fieldConfig: INPUT_FIELD_CONFIG['BooleanSearchInput'],
  },
]

export type DiseaseSearchFilter = {
  booleanOperator?: InputMaybe<BooleanOperator>
  deprecated?: InputMaybe<BooleanSearchInput>
  diseaseAliases?: InputMaybe<StringSearchInput>
  doid?: InputMaybe<OntologyTermSearchInput>
  id?: InputMaybe<IntSearchInput>
  name?: InputMaybe<StringSearchInput>
  subFilters?: InputMaybe<Array<DiseaseSearchFilter>>
}

// export type StringSearchInput = {
//   operator: StringSearchOperator;
//   value: Scalars['String']['input'];
// };

// export type OntologyTermSearchInput = {
//   operator: OntologyTermSearchOperator;
//   value: Scalars['String']['input'];
// };

// export enum OntologyTermSearchOperator {
//   /** Equals */
//   Eq = 'EQ',
//   /** Include the matched term and any sibling terms */
//   EqSelfAndSiblings = 'EQ_SELF_AND_SIBLINGS',
//   /** Include the matched term along with all ancestor terms recursively */
//   EqSelfOrAllAncestors = 'EQ_SELF_OR_ALL_ANCESTORS',
//   /** Include the matched term and any descendant terms recursively */
//   EqSelfOrAllDescendants = 'EQ_SELF_OR_ALL_DESCENDANTS',
//   /** Include the matched term and any direct child terms */
//   EqSelfOrDirectChildren = 'EQ_SELF_OR_DIRECT_CHILDREN',
//   /** Include the matched term and its direct parent terms */
//   EqSelfOrDirectParents = 'EQ_SELF_OR_DIRECT_PARENTS',
//   /** Does not equal */
//   Ne = 'NE'
// }
