// Add 'BREAK' and 'valueFromASTUntyped' to your imports
// 'Kind' is no longer strictly needed, but see note 3
import { BREAK, Kind, parse, valueFromASTUntyped, visit } from 'graphql'

/**
 * Parses a GraphQL query string and extracts the 'query'
 * argument object as a plain JSON object.
 */
export function getFormModelFromOriginalQuery(queryString: string): any {
  if (!queryString) {
    return null
  }

  try {
    const documentNode = parse(queryString)
    let model: any = null

    visit(documentNode, {
      Argument: (node) => {
        if (
          node.name.value === 'query' &&
          // Fix 3: Use the 'Kind' enum import
          node.value.kind === Kind.OBJECT
        ) {
          // Fix 2: Use 'valueFromASTUntyped' which does not
          // require a schema type as the second argument.
          model = valueFromASTUntyped(node.value)

          // Fix 1: Return the imported 'BREAK' constant
          return BREAK // Stop visiting
        } else {
          throw new Error('Could not find query argument in document')
        }
      },
    })

    return model
  } catch (error) {
    console.error('Failed to parse permalink query string', error)
    return null
  }
}
