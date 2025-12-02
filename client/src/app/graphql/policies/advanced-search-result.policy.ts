import { getFormModelFromOriginalQuery } from '@app/graphql/utilities/form-model-from-original-query'
import { FieldFunctionOptions, Reference } from '@apollo/client/cache'
import { Maybe } from '@app/generated/civic.apollo'

export const CvcAdvancedSearchResultPolicy = {
  fields: {
    formQuery: {
      read(
        _: Maybe<Reference>,
        options: FieldFunctionOptions
      ): Maybe<Reference> {
        const { readField } = options
        const originalQuery = readField<string>('originalQuery')
        const originalVariables = readField<any>('originalVariables')
        if (!originalQuery) return undefined
        console.log('policy originalQuery', originalQuery)
        return getFormModelFromOriginalQuery(originalQuery, originalVariables)
      },
    },
  },
}
