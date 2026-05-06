// define behavior for User fields
// see: https://www.apollographql.com/docs/react/caching/cache-field-behavior/
import { Reference, TypePolicy } from '@apollo/client/cache'
import { Maybe } from '@app/generated/civic.apollo'
export const CvcUserPolicy: TypePolicy = {
  fields: {
    mostRecentOrg: {
      read: (_: Maybe<Reference>, { readField }): Maybe<Reference> => {
        // return reference to most recently used Organization
        const mroId: Maybe<number> = readField('mostRecentOrganizationId')
        const orgs: Maybe<readonly Reference[]> = readField('organizations')
        if (mroId && orgs) {
          return orgs.find((o) => o.__ref === `Organization:${mroId}`)
        } else {
          return undefined
        }
      },
    },
  },
}
