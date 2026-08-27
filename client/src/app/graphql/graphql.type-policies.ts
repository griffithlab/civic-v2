import { relayStylePagination } from '@apollo/client/utilities'
import { StrictTypedTypePolicies } from '@app/generated/civic.apollo-helpers'
import { CvcAdvancedSearchResultPolicy } from '@app/graphql/policies/advanced-search-result.policy'

/**
 * Embed a type in whatever query result fetched it instead of normalizing it.
 *
 * Apply to "row" types that carry an entity's `id` alongside fields scoped to
 * the query that produced them — a leaderboard row is user 12 *plus* that
 * board's rank and actionCount for one time window. Normalization treats id as
 * global identity: every board and every window would fold into one
 * `LeaderboardUser:12` object, and whichever query wrote last would clobber
 * the others' rank. `keyFields: false` keeps each row inside its own
 * connection entry, which the default field keying already partitions by
 * board field and arguments. (Value types with no id at all — ContributingUser,
 * Ranks — get this behavior by default and need no policy.)
 */
function embeddedRow(): { keyFields: false } {
  return { keyFields: false }
}

/**
 * Deep-merge writes to a keyless singleton instead of replacing it.
 *
 * Apply to namespace objects — id-less types that exist once under ROOT_QUERY
 * and whose fields are populated by separate queries (the four leaderboard
 * queries each write one board field of `userLeaderboards`). Apollo's default
 * for a keyless object is replacement, so the last query to respond would
 * discard every other query's fields ("Cache data may be lost..." warning).
 */
function mergedNamespace(): { merge: true } {
  return { merge: true }
}

export const CvcTypePolicies: StrictTypedTypePolicies = {
  // leaderboard rows carry per-board, per-window rank/actionCount on an
  // entity id; see embeddedRow. Before these policies the leaderboard
  // components masked the collision with no-cache fetch policies.
  LeaderboardUser: embeddedRow(),
  LeaderboardOrganization: embeddedRow(),
  // the four user/org leaderboard queries each write one field of these
  // keyless singletons; see mergedNamespace
  UserLeaderboards: mergedNamespace(),
  OrganizationLeaderboards: mergedNamespace(),
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
      activities: relayStylePagination([
        'subject',
        'organizationId',
        'userId',
        'activityType',
        'subjectType',
        'linkedApprovalId',
      ]),
      browseFeatures: relayStylePagination([
        'name',
        'featureType',
        'therapyName',
        'featureAlias',
        'diseaseName',
      ]),
      browseVariants: relayStylePagination([
        'variantName',
        'entrezSymbol',
        'diseaseName',
        'therapayName',
        'variantTypeId',
        'variantGroupId',
        'variantCategory',
      ]),
      browseMolecularProfiles: relayStylePagination([
        'variantName',
        'entrezSymbol',
        'diseaseName',
        'therapyName',
        'molecularProfileScore',
        'molecularProfileAlias',
        'variantId',
      ]),
      browseVariantGroups: relayStylePagination([
        'name',
        'geneNames',
        'variantNames',
        'variantId',
      ]),
      browseSources: relayStylePagination([
        'name',
        'year',
        'sourceType',
        'citationId',
        'author',
        'journal',
        'clinicalTrialId',
        'id',
        'openAccess',
      ]),
      sourceSuggestions: relayStylePagination([
        'sourceType',
        'citationId',
        'sourceId',
        'molecularProfileName',
        'diseaseName',
        'comment',
        'submitter',
        'citation',
        'status',
        'submitterId',
      ]),
      browseTherapies: relayStylePagination([
        'name',
        'ncitId',
        'therapyAlias',
        'sortBy',
      ]),
      events: relayStylePagination([
        'subject',
        'organizationId',
        'originatingUserId',
        'eventType',
      ]),
      variants: relayStylePagination(['featureId', 'name']),
      newsItems: relayStylePagination(),
      molecularProfiles: relayStylePagination([
        'featureId',
        'name',
        'evidenceStatusFilter',
      ]),
      comments: relayStylePagination(['originatingUserId', 'subject']),
      evidenceItems: relayStylePagination([
        'diseaseName',
        'therapayName',
        'id',
        'description',
        'evidenceLevel',
        'evidenceDirection',
        'significance',
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
        'therapayId',
        'sourceId',
        'geneSymbol',
        'variantName',
        'status',
        'clinicalTrialId',
      ]),
      assertions: relayStylePagination([
        'diseaseName',
        'therapayName',
        'id',
        'name',
        'summary',
        'assertionDirection',
        'significance',
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
        'therapayId',
        'status',
      ]),
      organizations: relayStylePagination(['name', 'id']),
      flags: relayStylePagination([
        'flaggable',
        'flaggingUserId',
        'resolvingUserId',
        'state',
      ]),
      browsePhenotypes: relayStylePagination(['hpoId', 'name', 'sortBy']),
      variantTypes: relayStylePagination(['soid', 'name', 'id']),
      browseDiseases: relayStylePagination([
        'name',
        'doid',
        'diseaseAlias',
        'featureName',
        'sortBy',
      ]),
      therapies: relayStylePagination(['ncitId', 'name', 'id']),
      clinicalTrials: relayStylePagination(['nctId', 'name', 'id']),
      notifications: relayStylePagination([
        'notificationReason',
        'subscriptionId',
        'originatingObject',
        'eventType',
        'originatingUserId',
        'organizationId',
        'includeRead',
      ]),
      revisions: relayStylePagination([
        'subject',
        'status',
        'originatingUserId',
        'fieldName',
        'revisionsetId',
      ]),
      browseUsers: relayStylePagination([
        'name',
        'organization',
        'role',
        'sortBy',
      ]),
      users: relayStylePagination(['userName', 'orgName', 'userRole']),
      revisionSets: relayStylePagination([
        'status',
        'fieldName',
        'originatingUserName',
        'excludeRevisionsFromUserId',
        'organizatioName',
        'subjectType',
        'id',
      ]),
    },
  },
  AdvancedSearchResult: CvcAdvancedSearchResultPolicy as any,
}
