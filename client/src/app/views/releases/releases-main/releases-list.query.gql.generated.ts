/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DataReleasesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DataReleasesQuery = { __typename: 'Query', dataReleases: Array<{ __typename: 'DataRelease', name: string, featureTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, variantTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, variantGroupTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedEvidenceTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAndSubmittedEvidenceTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, molecularProfileTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAssertionTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAndSubmittedAssertionTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedVariantsVcf?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAndSubmittedVariantsVcf?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined }> };

export type ReleaseFragment = { __typename: 'DataRelease', name: string, featureTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, variantTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, variantGroupTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedEvidenceTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAndSubmittedEvidenceTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, molecularProfileTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAssertionTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAndSubmittedAssertionTsv?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedVariantsVcf?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined, acceptedAndSubmittedVariantsVcf?: { __typename: 'DownloadableFile', filename: string, path: string } | undefined };

export const ReleaseFragmentDoc = gql`
    fragment Release on DataRelease {
  name
  featureTsv {
    filename
    path
  }
  variantTsv {
    filename
    path
  }
  variantGroupTsv {
    filename
    path
  }
  acceptedEvidenceTsv {
    filename
    path
  }
  acceptedAndSubmittedEvidenceTsv {
    filename
    path
  }
  molecularProfileTsv {
    filename
    path
  }
  acceptedAssertionTsv {
    filename
    path
  }
  acceptedAndSubmittedAssertionTsv {
    filename
    path
  }
  acceptedVariantsVcf {
    filename
    path
  }
  acceptedAndSubmittedVariantsVcf {
    filename
    path
  }
}
    `;
export const DataReleasesDocument = gql`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${ReleaseFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DataReleasesGQL extends Apollo.Query<DataReleasesQuery, DataReleasesQueryVariables> {
    document = DataReleasesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }