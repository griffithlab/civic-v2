import { makeVar, ReactiveVar, TypePolicies } from "@apollo/client/cache";
import { relayStylePagination } from "@apollo/client/utilities";
import { Organization, User } from "@app/generated/civic.apollo";
import gql from "graphql-tag";
import { Maybe } from "@app/generated/civic.apollo";

export const CvcTypePolicies: TypePolicies = {
  Gene: {
    fields: {
      comments: relayStylePagination(),
      revisions: relayStylePagination(),
      events: relayStylePagination(),
      variants: relayStylePagination()
    }
  },
  Query: {
    fields: {
      browseGenes: relayStylePagination(["entrezSymbol", "drugName", "geneAlias", "diseaseName"]),
      browseVariants: relayStylePagination(["variantName", "entrezSymbol", "diseaseName", "drugName"]),
      browseVariantGroups: relayStylePagination(["name", "geneNames", "variantNames"]),
      browseSources: relayStylePagination(["name", "year", "sourceType", "citationId", "author", "journal"]),
      browseDiseases: relayStylePagination(["name", "doid", "geneNames"]),
      events: relayStylePagination(["subject", "organizationId", "originatingUserId", "eventType"]),
      variants: relayStylePagination(["geneId", "name", "evidenceStatusFilter"]),
      comments: relayStylePagination(["originatingUserId", "subject"]),
      evidenceItems: relayStylePagination(["diseaseName", "drugName", "id", "description", "evidenceLevel", "evidenceDirection", "clinicalSignificance", "evidenceType", "evidenceRating", "variantOrigin", "variantId", "assertionId", "organizationId", "userId"]),
      assertions: relayStylePagination(["diseaseName", "drugName", "id", "summary", "assertionDirection", "clinicalSignificance", "assertionType", "variantId", "ampLevel", "geneName", "variantName", "evidenceId", "organizationId", "userId"]),
      organizations: relayStylePagination(["name", "id"]),
      flags: relayStylePagination(["flaggable", "flaggingUserId", "resolvingUserId", "state"]),
    }
  }
};

/*
 * Local Variable GQL, reactive variables
 */
