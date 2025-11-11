import { QueryBuilderFieldOption } from '@app/forms/config/query-builder/query-builder.types'

export const searchDiseasesFieldOptions: QueryBuilderFieldOption[] = [
  { key: 'deprecated', label: 'Deprecated' },
  { key: 'diseaseAliases', label: 'Aliases' },
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
]

// export type DiseaseSearchFilter = {
//   booleanOperator?: InputMaybe<BooleanOperator>;
//   deprecated?: InputMaybe<BooleanSearchInput>;
//   diseaseAliases?: InputMaybe<StringSearchInput>;
//   doid?: InputMaybe<OntologyTermSearchInput>;
//   id?: InputMaybe<IntSearchInput>;
//   name?: InputMaybe<StringSearchInput>;
//   subFilters?: InputMaybe<Array<DiseaseSearchFilter>>;
// };

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
// export const searchDiseaseConfig: FormlyFieldConfig[] = [
//   {
//     key: 'query',
//     wrappers: ['query-subfilters-card'],
//     props: {
//       formCardOptions: { title: 'Search Diseases' },
//       fieldOptions: [{ label: 'Name', value: 'name' }],
//     },
//     fieldGroup: [
//       {
//         key: 'booleanOperator',
//         type: 'base-select',
//         wrappers: [],
//         props: {
//           required: true,
//           size: 'small',
//           options: [
//             { label: 'all', value: BooleanOperator.And },
//             { label: 'any', value: BooleanOperator.Or },
//           ],
//         },
//       },
//       {
//         key: 'subFilters',
//         type: 'query-subfilters',
//         wrappers: [],
//         props: {
//           filterConfig: [],
//         },
//         fieldArray: {
//           fieldGroup: [
//             /* ... */
//           ],
//         },
//       },
//     ],
//   },
// ]
