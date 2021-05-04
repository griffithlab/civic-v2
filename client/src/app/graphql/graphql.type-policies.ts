import { makeVar, ReactiveVar, TypePolicies } from "@apollo/client/cache";
import { relayStylePagination } from "@apollo/client/utilities";
import { Organization, User } from "@app/generated/civic.apollo";
import gql from "graphql-tag";
import { Maybe } from "@app/generated/civic.apollo";

export const CvcTypePolicies: TypePolicies = {
  Query: {
    fields: {
      browseGenes: relayStylePagination(),
    }
  }
};

/*
 * Local Variable GQL, reactive variables
 */
