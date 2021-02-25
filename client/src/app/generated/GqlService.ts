/* eslint-disable */
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { AppModule } from '../app.module';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Disease = {
  __typename?: 'Disease';
  name: Scalars['String'];
};

export type Drug = {
  __typename?: 'Drug';
  name: Scalars['String'];
};

export type Gene = {
  __typename?: 'Gene';
  assertionCount: Scalars['Int'];
  description: Scalars['String'];
  diseases?: Maybe<Array<Disease>>;
  drugs?: Maybe<Array<Drug>>;
  entrezId: Scalars['Int'];
  evidenceItemCount: Scalars['Int'];
  geneAliases?: Maybe<Array<GeneAlias>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  officialName: Scalars['String'];
  variantCount: Scalars['Int'];
};

export type GeneAlias = {
  __typename?: 'GeneAlias';
  name: Scalars['String'];
};

/** The connection type for Gene. */
export type GeneConnection = {
  __typename?: 'GeneConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GeneEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Gene>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GeneEdge = {
  __typename?: 'GeneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Gene>;
};

export type GenesSort = {
  /** Available columns for sorting */
  column: GenesSortColumns;
  /** Sort direction */
  direction: SortDirection;
};

export enum GenesSortColumns {
  DiseaseName = 'diseaseName',
  DrugName = 'drugName',
  EntrezSymbol = 'entrezSymbol',
  GeneAlias = 'geneAlias'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  genes: GeneConnection;
};


export type QueryGenesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  diseaseName?: Maybe<Scalars['String']>;
  drugName?: Maybe<Scalars['String']>;
  entrezSymbol?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  geneAlias?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GenesSort>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type BrowseGenesQueryVariables = Exact<{
  entrezSymbol?: Maybe<Scalars['String']>;
  drugName?: Maybe<Scalars['String']>;
  geneAlias?: Maybe<Scalars['String']>;
  diseaseName?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GenesSort>;
  genesSortColumn: GenesSortColumns;
  sortDirection: SortDirection;
}>;


export type BrowseGenesQuery = (
  { __typename?: 'Query' }
  & { genes: (
    { __typename?: 'GeneConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Gene' }
      & Pick<Gene, 'id' | 'entrezId' | 'name' | 'variantCount' | 'evidenceItemCount' | 'assertionCount'>
      & { drugs?: Maybe<Array<(
        { __typename?: 'Drug' }
        & Pick<Drug, 'name'>
      )>>, geneAliases?: Maybe<Array<(
        { __typename?: 'GeneAlias' }
        & Pick<GeneAlias, 'name'>
      )>>, diseases?: Maybe<Array<(
        { __typename?: 'Disease' }
        & Pick<Disease, 'name'>
      )>> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  ) }
);

export const BrowseGenesDocument = gql`
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $first: Int, $last: Int, $sortBy: GenesSort, $genesSortColumn: GenesSortColumns!, $sortDirection: SortDirection!) {
  genes(entrezSymbol: $entrezSymbol, drugName: $drugName, geneAlias: $geneAlias, diseaseName: $diseaseName, first: $first, last: $last, sortBy: {column: $genesSortColumn, direction: $sortDirection}) {
    nodes {
      id
      entrezId
      name
      drugs {
        name
      }
      geneAliases {
        name
      }
      diseases {
        name
      }
      variantCount
      evidenceItemCount
      assertionCount
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

  @Injectable({
    providedIn: AppModule
  })
  export class BrowseGenesGQL extends Apollo.Query<BrowseGenesQuery, BrowseGenesQueryVariables> {
    document = BrowseGenesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    