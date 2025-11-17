/**
 * DEPRECATED: This file is no longer used for field config generation.
 *
 * Filter options for Evidence Items are now defined in filter-metadata.config.ts
 * and field configs are generated dynamically at runtime by generate-runtime-field-config.ts
 *
 * This prevents recursive config generation issues and allows for nested entity filters.
 *
 * See:
 * - filter-metadata.config.ts for filter definitions
 * - generate-runtime-field-config.ts for dynamic field generation
 * - query-filter.type.ts for the component that uses these
 */

// Reference: GraphQL EvidenceItemSearchFilter type
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
