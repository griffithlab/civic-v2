/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MolecularProfileRevisableFieldsQueryVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
}>;


export type MolecularProfileRevisableFieldsQuery = { __typename: 'Query', molecularProfile?: { __typename: 'MolecularProfile', id: number, description?: string | undefined, molecularProfileAliases: Array<string>, isComplex: boolean, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }> } | undefined };

export type RevisableMolecularProfileFieldsFragment = { __typename: 'MolecularProfile', id: number, description?: string | undefined, molecularProfileAliases: Array<string>, isComplex: boolean, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }> };

export type SuggestMolecularProfileRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestMolecularProfileRevisionInput;
}>;


export type SuggestMolecularProfileRevisionMutation = { __typename: 'Mutation', suggestMolecularProfileRevision?: { __typename: 'SuggestMolecularProfileRevisionPayload', clientMutationId?: string | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number }, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean, id: number, fieldName: string }> } | undefined };

export const RevisableMolecularProfileFieldsFragmentDoc = gql`
    fragment RevisableMolecularProfileFields on MolecularProfile {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  molecularProfileAliases
  isComplex
}
    `;
export const MolecularProfileRevisableFieldsDocument = gql`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${RevisableMolecularProfileFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfileRevisableFieldsGQL extends Apollo.Query<MolecularProfileRevisableFieldsQuery, MolecularProfileRevisableFieldsQueryVariables> {
    document = MolecularProfileRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestMolecularProfileRevisionDocument = gql`
    mutation SuggestMolecularProfileRevision($input: SuggestMolecularProfileRevisionInput!) {
  suggestMolecularProfileRevision(input: $input) {
    clientMutationId
    molecularProfile {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SuggestMolecularProfileRevisionGQL extends Apollo.Mutation<SuggestMolecularProfileRevisionMutation, SuggestMolecularProfileRevisionMutationVariables> {
    document = SuggestMolecularProfileRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }