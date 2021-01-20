import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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



export type Gene = {
  __typename?: 'Gene';
  id: Scalars['Int'];
  type?: Maybe<EntityType>;
  name: Scalars['String'];
  entrezId: Scalars['Int'];
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  lifecycleActions?: Maybe<Array<Maybe<LifecycleAction>>>;
  variants?: Maybe<Array<Maybe<Variant>>>;
};

export type Variant = {
  __typename?: 'Variant';
  id: Scalars['Int'];
  type?: Maybe<EntityType>;
  name: Scalars['String'];
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  lifecycleActions: Array<LifecycleAction>;
  evidence?: Maybe<Array<Maybe<Evidence>>>;
};

export type VariantGroup = {
  __typename?: 'VariantGroup';
  id: Scalars['Int'];
  type?: Maybe<EntityType>;
  name: Scalars['String'];
  lifecycleActions: Array<LifecycleAction>;
  variants: Array<Maybe<Variant>>;
};

export type Evidence = {
  __typename?: 'Evidence';
  id: Scalars['Int'];
  type?: Maybe<EntityType>;
  name: Scalars['String'];
  summary: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  disease?: Maybe<Array<Maybe<Disease>>>;
  rating: Scalars['Int'];
  evidenceLevel: Scalars['String'];
  evidenceType: EvidenceType;
  evidenceDirection: Scalars['String'];
  variantOrigin: Scalars['String'];
  drugInteractionType?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  openChangeCount: Scalars['Int'];
};

export type Assertion = {
  __typename?: 'Assertion';
  id: Scalars['Int'];
  type?: Maybe<EntityType>;
  name: Scalars['String'];
  summary: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  evidence?: Maybe<Array<Maybe<Evidence>>>;
  disease?: Maybe<Array<Maybe<Disease>>>;
  rating: Scalars['Int'];
  evidenceLevel: Scalars['String'];
  assertionType: AssertionType;
  evidenceDirection: Scalars['String'];
  variantOrigin: Scalars['String'];
  drugInteractionType?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  openChangeCount: Scalars['Int'];
};

export type Disease = {
  __typename?: 'Disease';
  id: Scalars['Int'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  doid: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
};

export enum EvidenceType {
  Diagnostic = 'DIAGNOSTIC',
  Functional = 'FUNCTIONAL',
  Predictive = 'PREDICTIVE',
  Predisposing = 'PREDISPOSING',
  Prognostic = 'PROGNOSTIC'
}

export enum AssertionType {
  Diagnostic = 'DIAGNOSTIC',
  Predictive = 'PREDICTIVE',
  Predisposing = 'PREDISPOSING',
  Prognostic = 'PROGNOSTIC'
}

export enum EntityType {
  Evidence = 'EVIDENCE',
  Gene = 'GENE',
  Source = 'SOURCE',
  Variant = 'VARIANT',
  VariantGroup = 'VARIANT_GROUP'
}

export type LifecycleAction = {
  __typename?: 'LifecycleAction';
  id: Scalars['Int'];
  type: LifecycleType;
  timestamp: Scalars['String'];
  user?: Maybe<User>;
  organization?: Maybe<Organization>;
};

export enum LifecycleType {
  Accepted = 'ACCEPTED',
  LastModified = 'LAST_MODIFIED',
  LastReviewed = 'LAST_REVIEWED',
  Rejected = 'REJECTED'
}

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  displayName: Scalars['String'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  description: Scalars['String'];
  parent?: Maybe<Organization>;
};

export type Query = {
  __typename?: 'Query';
  allEvidence: Array<Maybe<Evidence>>;
  allGenes: Array<Maybe<Gene>>;
  allVariants: Array<Variant>;
  allUsers: Array<Maybe<User>>;
  allAssertions: Array<Maybe<Assertion>>;
  allVariantGroups: Array<Maybe<VariantGroup>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { allGenes: Array<Maybe<(
    { __typename?: 'Gene' }
    & Pick<Gene, 'id' | 'name'>
  )>> }
);

export const Document = gql`
    {
  allGenes {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GQL extends Apollo.Query<Query, QueryVariables> {
    document = Document;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }