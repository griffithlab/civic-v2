// Add 'BREAK' and 'valueFromASTUntyped' to your imports
// 'Kind' is no longer strictly needed, but see note 3
import { BREAK, Kind, parse, valueFromASTUntyped, visit } from 'graphql'
import { Maybe } from '@generated/civic.apollo'

/**
 * Parses a GraphQL query string and extracts the 'query'
 * argument object as a plain JSON object.
 */
export function getFormModelFromOriginalQuery(
  originalQuery: string,
  originalVariables: Maybe<{ query: any; createPermalinkId: boolean }>
): any {
  if (!originalQuery) {
    return null
  }

  try {
    const documentNode = parse(originalQuery)
    let model: JSON | null = null
    if (originalVariables && originalVariables.query !== undefined) {
      // query stored as JSON, can just be returned directly
      model = originalVariables.query
    } else {
      // if no query variables provided, we need to extract them from the GQL document
      visit(documentNode, {
        Argument: (node) => {
          if (node.name.value === 'query' && node.value.kind === Kind.OBJECT) {
            model = valueFromASTUntyped(node.value) as JSON
            return BREAK
          } else {
            throw new Error('Could not find query in original query document.')
          }
        },
      })
    }
    return model
  } catch (error) {
    console.error('Failed to parse permalink original query', error)
    return null
  }
}
