/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantPopoverQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type VariantPopoverQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } }
    | { __typename: 'FusionVariant', viccCompliantName: string, id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } }
    | { __typename: 'GeneVariant', alleleRegistryId?: string | undefined, id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } }
    | { __typename: 'RegionVariant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } }
    | { __typename: 'Variant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } }
   | undefined };

export type VariantPopoverFields_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } };

export type VariantPopoverFields_FusionVariant_Fragment = { __typename: 'FusionVariant', viccCompliantName: string, id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } };

export type VariantPopoverFields_GeneVariant_Fragment = { __typename: 'GeneVariant', alleleRegistryId?: string | undefined, id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } };

export type VariantPopoverFields_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } };

export type VariantPopoverFields_Variant_Fragment = { __typename: 'Variant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number } };

export type VariantPopoverFieldsFragment =
  | VariantPopoverFields_FactorVariant_Fragment
  | VariantPopoverFields_FusionVariant_Fragment
  | VariantPopoverFields_GeneVariant_Fragment
  | VariantPopoverFields_RegionVariant_Fragment
  | VariantPopoverFields_Variant_Fragment
;

export const VariantPopoverFieldsFragmentDoc = gql`
    fragment variantPopoverFields on VariantInterface {
  id
  name
  variantAliases
  ... on GeneVariant {
    alleleRegistryId
  }
  ... on FusionVariant {
    viccCompliantName
  }
  feature {
    id
    name
    link
    deprecated
    flagged
  }
  molecularProfiles {
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
    `;
export const VariantPopoverDocument = gql`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${VariantPopoverFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantPopoverGQL extends Apollo.Query<VariantPopoverQuery, VariantPopoverQueryVariables> {
    document = VariantPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }