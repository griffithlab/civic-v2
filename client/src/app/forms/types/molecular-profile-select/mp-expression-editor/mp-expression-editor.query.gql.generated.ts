/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileParsedNameFragmentDoc } from '../../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type PreviewMolecularProfileName2QueryVariables = Types.Exact<{
  mpStructure?: Types.InputMaybe<Types.MolecularProfileComponentInput>;
}>;


export type PreviewMolecularProfileName2Query = { __typename: 'Query', previewMolecularProfileName: { __typename: 'MolecularProfileNamePreview', existingMolecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, segments: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    >, deprecatedVariants: Array<
      | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > } };

export type MpExpressionEditorPrepopulateQueryVariables = Types.Exact<{
  mpId: Types.Scalars['Int']['input'];
}>;


export type MpExpressionEditorPrepopulateQuery = { __typename: 'Query', molecularProfile?: { __typename: 'MolecularProfile', id: number, rawName: string, deprecated: boolean, flagged: boolean, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > } | undefined };

export type CreateMolecularProfile2MutationVariables = Types.Exact<{
  mpStructure: Types.MolecularProfileComponentInput;
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CreateMolecularProfile2Mutation = { __typename: 'Mutation', createMolecularProfile?: { __typename: 'CreateMolecularProfilePayload', molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } } | undefined };

export type PreviewMpName2_Feature_Fragment = { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean };

export type PreviewMpName2_MolecularProfileTextSegment_Fragment = { __typename: 'MolecularProfileTextSegment', text: string };

export type PreviewMpName2_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean };

export type PreviewMpName2Fragment =
  | PreviewMpName2_Feature_Fragment
  | PreviewMpName2_MolecularProfileTextSegment_Fragment
  | PreviewMpName2_Variant_Fragment
;

export const PreviewMpName2FragmentDoc = gql`
    fragment PreviewMpName2 on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
    id
    name
    link
    deprecated
    flagged
  }
  ... on Variant {
    id
    name
    link
    deprecated
    flagged
  }
}
    `;
export const PreviewMolecularProfileName2Document = gql`
    query PreviewMolecularProfileName2($mpStructure: MolecularProfileComponentInput) {
  previewMolecularProfileName(structure: $mpStructure) {
    existingMolecularProfile {
      id
      name
      link
      deprecated
      flagged
    }
    segments {
      ...PreviewMpName2
    }
    deprecatedVariants {
      id
      name
      link
      deprecated
      flagged
    }
  }
}
    ${PreviewMpName2FragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PreviewMolecularProfileName2GQL extends Apollo.Query<PreviewMolecularProfileName2Query, PreviewMolecularProfileName2QueryVariables> {
    document = PreviewMolecularProfileName2Document;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MpExpressionEditorPrepopulateDocument = gql`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
    deprecated
    flagged
  }
}
    ${MolecularProfileParsedNameFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MpExpressionEditorPrepopulateGQL extends Apollo.Query<MpExpressionEditorPrepopulateQuery, MpExpressionEditorPrepopulateQueryVariables> {
    document = MpExpressionEditorPrepopulateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateMolecularProfile2Document = gql`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!, $organizationId: Int) {
  createMolecularProfile(
    input: {structure: $mpStructure, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
      link
      deprecated
      flagged
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMolecularProfile2GQL extends Apollo.Mutation<CreateMolecularProfile2Mutation, CreateMolecularProfile2MutationVariables> {
    document = CreateMolecularProfile2Document;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }