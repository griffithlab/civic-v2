import {
  MolecularProfileComponentInput,
  BooleanOperator,
  VariantComponent,
} from '@app/generated/civic.apollo'

const leftParen = /\(/g
const rightParen = /\)/g
const booleanToken = /AND|OR/i
const variantToken = /^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i
const whitespace = /\s+/
const exprPlaceholder = 'EXPR'

export interface MpParseError {
  errorMessage: string
  errorHelp?: string
}

export type MpParseResult = MpParseError | MolecularProfileComponentInput

export function parseMolecularProfile(input: string): MpParseResult {
  let padded = input.replace(leftParen, ' ( ').replace(rightParen, ' ) ')
  return parseSection(padded)
}

function parseSection(section: string): MpParseResult {
  let tokens = section.split(whitespace)
  let firstBoolean: BooleanOperator | undefined = undefined

  let parenIndex = 0
  let nestedSegments: string[] = []
  let processedTokens: string[] = []
  let nestedResults: MolecularProfileComponentInput[] = []

  for (let token of tokens) {
    if (token == '(') {
      if (parenIndex != 0) {
        nestedSegments.push(token)
      }
      parenIndex += 1
    } else if (token == ')') {
      parenIndex -= 1
      if (parenIndex == 0) {
        let section = parseSection(nestedSegments.join(' '))
        if ('errorMessage' in section) {
          return section
        } else {
          nestedResults.push(section)
          processedTokens.push(exprPlaceholder)
          nestedSegments = []
        }
      } else {
        nestedSegments.push(token)
      }
    } else if (parenIndex > 0) {
      nestedSegments.push(token)
    } else {
      processedTokens.push(token)
    }
  }

  //Split on whitespace, check that we only have a single boolean operator type and that it is not the first or last token
  let i = 0
  for (let token of processedTokens) {
    let isBool = booleanToken.test(token)
    if (isBool && i == tokens.length - 1) {
      return {
        errorMessage: 'Trailing AND/OR operator found.',
        errorHelp:
          'Boolean operators may not be used at the end of an expression.',
      }
    }

    if (isBool && i == 0) {
      return {
        errorMessage: 'The expression may not start with AND/OR.',
        errorHelp:
          'Boolean operators may not be used at the beginning of an expression.',
      }
    }

    if (isBool && !firstBoolean) {
      firstBoolean = booleanOperatorFromToken(token)
    } else if (isBool && firstBoolean) {
      let nextBool = booleanOperatorFromToken(token)
      if (nextBool !== firstBoolean) {
        return {
          errorMessage:
            'Expression may not include both AND/OR within a single segment.',
          errorHelp:
            'Segments may only contain identical boolean operators. Use parentheses to group form segments with consistent AND/OR operators.',
        }
      }
    }
    i++
  }

  let variants: VariantComponent[] = []

  let segments = processedTokens.join(' ').split(booleanToken)
  for (let token of segments.map((s) => s.trim())) {
    let matchData = variantToken.exec(token)
    if (matchData === null) {
      // NOTE: empty token at this point appears to only occur when a paren is the last character in the expression
      if (token.length === 0) {
        return {
          errorMessage: `Expression appears to be incomplete.`,
          errorHelp: 'Ensure that all parentheses are balanced.',
        }
      }
      if (token !== exprPlaceholder) {
        return {
          errorMessage: `Variant '${token}' does not match the expected format.`,
          errorHelp:
            'The token should be a #VID prepended with an optional NOT.',
        }
      }
    } else {
      variants.push({
        not: matchData[1] ? true : false,
        variantId: parseInt(matchData[2]),
      })
    }
  }
  return {
    booleanOperator: firstBoolean,
    variantComponents: variants,
    complexComponents: nestedResults,
  }
}

function booleanOperatorFromToken(token: string): BooleanOperator {
  if (token.toUpperCase() == 'AND') {
    return BooleanOperator.And
  } else {
    return BooleanOperator.Or
  }
}
