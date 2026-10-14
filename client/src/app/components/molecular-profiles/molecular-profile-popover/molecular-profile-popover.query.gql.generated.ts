/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileParsedNameFragmentDoc } from '../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MolecularProfilePopoverQueryVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
}>;


export type MolecularProfilePopoverQuery = { __typename: 'Query', molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, molecularProfileAliases: Array<string>, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    >, evidenceItems: { __typename: 'EvidenceItemConnection', totalCount: number }, assertions: { __typename: 'AssertionConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } } | undefined };

export type MolecularProfilePopoverFieldsFragment = { __typename: 'MolecularProfile', id: number, name: string, molecularProfileAliases: Array<string>, parsedName: Array<
    | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    | { __typename: 'MolecularProfileTextSegment', text: string }
    | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
  >, evidenceItems: { __typename: 'EvidenceItemConnection', totalCount: number }, assertions: { __typename: 'AssertionConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } };

export const MolecularProfilePopoverFieldsFragmentDoc = gql`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    ...MolecularProfileParsedName
  }
  molecularProfileAliases
  evidenceItems {
    totalCount
  }
  assertions {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    ${MolecularProfileParsedNameFragmentDoc}`;
export const MolecularProfilePopoverDocument = gql`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${MolecularProfilePopoverFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfilePopoverGQL extends Apollo.Query<MolecularProfilePopoverQuery, MolecularProfilePopoverQueryVariables> {
    document = MolecularProfilePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }