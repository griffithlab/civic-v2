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
      browseGenes: relayStylePagination(),
      browseVariants: relayStylePagination(),
      events: relayStylePagination(),
      variants: relayStylePagination(),
      comments: relayStylePagination()
    }
  }
};

/*
 * Local Variable GQL, reactive variables
 */
