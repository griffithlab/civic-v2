import { TypePolicies } from '@apollo/client/cache';
import { relayStylePagination } from '@apollo/client/utilities';

export const CvcTypePolicies: TypePolicies = {
  Gene: {
    fields: {
      comments: relayStylePagination(),
      revisions: relayStylePagination(),
      events: relayStylePagination(),
      variants: relayStylePagination(),
    },
  },
  Query: {
    fields: {
      browseGenes: relayStylePagination([
        'entrezSymbol',
        'drugName',
        'geneAlias',
        'diseaseName',
      ]),
      browseVariants: relayStylePagination([
        'variantName',
        'entrezSymbol',
        'diseaseName',
        'drugName',
        'variantTypeId',
        'variantGroupId'
      ]),
      browseMolecularProfiles: relayStylePagination([
        'variantName',
        'entrezSymbol',
        'diseaseName',
        'drugName',
        'molecularProfileAlias',
        'variantId'
      ]),
      browseVariantGroups: relayStylePagination([
        'name',
        'geneNames',
        'variantNames',
        'variantId'
      ]),
      browseSources: relayStylePagination([
        'name',
        'year',
        'sourceType',
        'citationId',
        'author',
        'journal',
        'clinicalTrialId',
        'id'
      ]),
      sourceSuggestions: relayStylePagination([
        'sourceType',
        'citationId',
        'sourceId',
        'geneName',
        'variantName',
        'diseaseName',
        'comment',
        'submitter',
        'citation',
        'status',
        'submitterId'
      ]), 
      browseDiseases: relayStylePagination(['name', 'doid', 'geneNames', 'id']),
      events: relayStylePagination([
        'subject',
        'organizationId',
        'originatingUserId',
        'eventType',
      ]),
      variants: relayStylePagination([
        'geneId',
        'name',
        'evidenceStatusFilter',
      ]),
      comments: relayStylePagination(['originatingUserId', 'subject']),
      evidenceItems: relayStylePagination([
        'diseaseName',
        'drugName',
        'id',
        'description',
        'evidenceLevel',
        'evidenceDirection',
        'clinicalSignificance',
        'evidenceType',
        'evidenceRating',
        'variantOrigin',
        'variantId',
        'molecularProfileId',
        'assertionId',
        'organizationId',
        'userId',
        'phenotypeId',
        'diseaseId',
        'drugId',
        'sourceId',
        'geneSymbol',
        'variantName',
        'status',
        'clinicalTrialId'
      ]),
      assertions: relayStylePagination([
        'diseaseName',
        'drugName',
        'id',
        'name',
        'summary',
        'assertionDirection',
        'clinicalSignificance',
        'assertionType',
        'variantId',
        'molecularProfileId',
        'ampLevel',
        'geneName',
        'variantName',
        'evidenceId',
        'organizationId',
        'userId',
        'phenotypeId',
        'diseaseId',
        'drugId',
        'status'
      ]),
      organizations: relayStylePagination(['name', 'id']),
      flags: relayStylePagination([
        'flaggable',
        'flaggingUserId',
        'resolvingUserId',
        'state',
      ]),
      phenotypes: relayStylePagination(['hpoId', 'name', 'id']),
      variantTypes: relayStylePagination(['soid', 'name', 'id']),
      drugs: relayStylePagination(['ncitId', 'name', 'id']),
      clinicalTrials: relayStylePagination(['nctId', 'name', 'id']),
      notifications: relayStylePagination([
        'notificationReason',
        'subscriptionId',
        'originatingObject',
        'eventType',
        'originatingUserId',
        'organizationId',
        'includeRead'
      ]),
      revisions: relayStylePagination([
        'subject',
        'status',
        'originatingUserId',
        'fieldName',
        'revisionsetId'
      ]),
      users: relayStylePagination([
        'userName',
        'orgName',
        'userRole'
      ]),
    },
  },
};