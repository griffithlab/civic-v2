// define behavior for User fields
// see: https://www.apollographql.com/docs/react/caching/cache-field-behavior/
import { TypePolicy } from '@apollo/client/cache'
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum'
import { Maybe, SourceSource } from '@app/generated/civic.apollo'
export const CvcSourcePolicy: TypePolicy = {
  fields: {
    name: {
      read: (_: Maybe<string>, { readField }): Maybe<string> => {
        // return "Source:Citation"
        const sourceSource: Maybe<SourceSource> = readField('sourceType')
        let sourceString: string
        if (!sourceSource) {
          sourceString = '?UNDEFINED?'
        } else {
          sourceString = formatSourceTypeEnum(sourceSource)
        }
        const citation: Maybe<string> = readField('citation')
        const citationId: Maybe<number> = readField('citationId')

        return `${sourceString}: ${citation || citationId || '?UNDEFINED?'}`
      },
    },
  },
}
