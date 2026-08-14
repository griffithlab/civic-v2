/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOriginalQueryQueryVariables = Types.Exact<{
  permalinkId: Types.Scalars['String']['input'];
}>;


export type GetOriginalQueryQuery = { __typename: 'Query', searchByPermalink: { __typename: 'AdvancedSearchResult', searchEndpoint: string, resultIds: Array<number>, originalQuery: any, originalVariables?: any | undefined, permalinkId?: string | undefined, formQuery?: any | undefined } };

export type QueryBuilderResponseFieldsFragment = { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> };

export type SearchEvidenceItemsQueryVariables = Types.Exact<{
  query: Types.EvidenceItemSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchEvidenceItemsQuery = { __typename: 'Query', searchEvidenceItems: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchAssertionsQueryVariables = Types.Exact<{
  query: Types.AssertionSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchAssertionsQuery = { __typename: 'Query', searchAssertions: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchDiseasesQueryVariables = Types.Exact<{
  query: Types.DiseaseSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchDiseasesQuery = { __typename: 'Query', searchDiseases: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchFeaturesQueryVariables = Types.Exact<{
  query: Types.FeatureSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchFeaturesQuery = { __typename: 'Query', searchFeatures: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchMolecularProfilesQueryVariables = Types.Exact<{
  query: Types.MolecularProfileSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchMolecularProfilesQuery = { __typename: 'Query', searchMolecularProfiles: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchPhenotypesQueryVariables = Types.Exact<{
  query: Types.PhenotypeSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchPhenotypesQuery = { __typename: 'Query', searchPhenotypes: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchSourcesQueryVariables = Types.Exact<{
  query: Types.SourceSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchSourcesQuery = { __typename: 'Query', searchSources: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchTherapiesQueryVariables = Types.Exact<{
  query: Types.TherapySearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchTherapiesQuery = { __typename: 'Query', searchTherapies: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchUsersQueryVariables = Types.Exact<{
  query: Types.UserSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchUsersQuery = { __typename: 'Query', searchUsers: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchVariantsQueryVariables = Types.Exact<{
  query: Types.VariantSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchVariantsQuery = { __typename: 'Query', searchVariants: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchCommentsQueryVariables = Types.Exact<{
  query: Types.CommentSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchCommentsQuery = { __typename: 'Query', searchComments: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchRevisionsQueryVariables = Types.Exact<{
  query: Types.RevisionSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchRevisionsQuery = { __typename: 'Query', searchRevisions: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export type SearchVariantTypesQueryVariables = Types.Exact<{
  query: Types.VariantTypeSearchFilter;
  createPermalink?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SearchVariantTypesQuery = { __typename: 'Query', searchVariantTypes: { __typename: 'AdvancedSearchResult', permalinkId?: string | undefined, searchEndpoint: string, resultIds: Array<number> } };

export const QueryBuilderResponseFieldsFragmentDoc = gql`
    fragment QueryBuilderResponseFields on AdvancedSearchResult {
  permalinkId
  searchEndpoint
  resultIds
}
    `;
export const GetOriginalQueryDocument = gql`
    query GetOriginalQuery($permalinkId: String!) {
  searchByPermalink(permalinkId: $permalinkId) {
    searchEndpoint
    resultIds
    originalQuery
    originalVariables
    permalinkId
    searchEndpoint
    formQuery @client
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOriginalQueryGQL extends Apollo.Query<GetOriginalQueryQuery, GetOriginalQueryQueryVariables> {
    document = GetOriginalQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchEvidenceItemsDocument = gql`
    query searchEvidenceItems($query: EvidenceItemSearchFilter!, $createPermalink: Boolean) {
  searchEvidenceItems(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchEvidenceItemsGQL extends Apollo.Query<SearchEvidenceItemsQuery, SearchEvidenceItemsQueryVariables> {
    document = SearchEvidenceItemsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchAssertionsDocument = gql`
    query searchAssertions($query: AssertionSearchFilter!, $createPermalink: Boolean) {
  searchAssertions(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchAssertionsGQL extends Apollo.Query<SearchAssertionsQuery, SearchAssertionsQueryVariables> {
    document = SearchAssertionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchDiseasesDocument = gql`
    query searchDiseases($query: DiseaseSearchFilter!, $createPermalink: Boolean) {
  searchDiseases(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchDiseasesGQL extends Apollo.Query<SearchDiseasesQuery, SearchDiseasesQueryVariables> {
    document = SearchDiseasesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchFeaturesDocument = gql`
    query searchFeatures($query: FeatureSearchFilter!, $createPermalink: Boolean) {
  searchFeatures(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchFeaturesGQL extends Apollo.Query<SearchFeaturesQuery, SearchFeaturesQueryVariables> {
    document = SearchFeaturesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchMolecularProfilesDocument = gql`
    query searchMolecularProfiles($query: MolecularProfileSearchFilter!, $createPermalink: Boolean) {
  searchMolecularProfiles(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchMolecularProfilesGQL extends Apollo.Query<SearchMolecularProfilesQuery, SearchMolecularProfilesQueryVariables> {
    document = SearchMolecularProfilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchPhenotypesDocument = gql`
    query searchPhenotypes($query: PhenotypeSearchFilter!, $createPermalink: Boolean) {
  searchPhenotypes(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchPhenotypesGQL extends Apollo.Query<SearchPhenotypesQuery, SearchPhenotypesQueryVariables> {
    document = SearchPhenotypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchSourcesDocument = gql`
    query searchSources($query: SourceSearchFilter!, $createPermalink: Boolean) {
  searchSources(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchSourcesGQL extends Apollo.Query<SearchSourcesQuery, SearchSourcesQueryVariables> {
    document = SearchSourcesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchTherapiesDocument = gql`
    query searchTherapies($query: TherapySearchFilter!, $createPermalink: Boolean) {
  searchTherapies(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchTherapiesGQL extends Apollo.Query<SearchTherapiesQuery, SearchTherapiesQueryVariables> {
    document = SearchTherapiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchUsersDocument = gql`
    query searchUsers($query: UserSearchFilter!, $createPermalink: Boolean) {
  searchUsers(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchUsersGQL extends Apollo.Query<SearchUsersQuery, SearchUsersQueryVariables> {
    document = SearchUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchVariantsDocument = gql`
    query searchVariants($query: VariantSearchFilter!, $createPermalink: Boolean) {
  searchVariants(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchVariantsGQL extends Apollo.Query<SearchVariantsQuery, SearchVariantsQueryVariables> {
    document = SearchVariantsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchCommentsDocument = gql`
    query searchComments($query: CommentSearchFilter!, $createPermalink: Boolean) {
  searchComments(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchCommentsGQL extends Apollo.Query<SearchCommentsQuery, SearchCommentsQueryVariables> {
    document = SearchCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchRevisionsDocument = gql`
    query searchRevisions($query: RevisionSearchFilter!, $createPermalink: Boolean) {
  searchRevisions(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchRevisionsGQL extends Apollo.Query<SearchRevisionsQuery, SearchRevisionsQueryVariables> {
    document = SearchRevisionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchVariantTypesDocument = gql`
    query searchVariantTypes($query: VariantTypeSearchFilter!, $createPermalink: Boolean) {
  searchVariantTypes(query: $query, createPermalink: $createPermalink) {
    ...QueryBuilderResponseFields
  }
}
    ${QueryBuilderResponseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchVariantTypesGQL extends Apollo.Query<SearchVariantTypesQuery, SearchVariantTypesQueryVariables> {
    document = SearchVariantTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }