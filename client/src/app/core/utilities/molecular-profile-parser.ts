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

export type MpParseErrorType =
  | 'incompleteExpression'
  | 'incompleteNOT'
  | 'initialBoolean'
  | 'invalidToken'
  | 'multipleBoolean'
  | 'trailingBoolean'
  | 'trailingNOT'
  | 'queryError'

export interface MpParseError {
  errorType: MpParseErrorType
  errorMessage: string
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

  const trailingBooleanError: MpParseResult = {
    errorType: 'trailingBoolean',
    errorMessage: 'Expressions may not end with AND / OR boolean operators.',
  }
  const initialBooleanError: MpParseResult = {
    errorType: 'initialBoolean',
    errorMessage: 'Expressions may not start with AND / OR boolean operators.',
  }
  const multipleBooleanError: MpParseResult = {
    errorType: 'multipleBoolean',
    errorMessage: 'Multiple boolean operators found.',
  }
  // FIXME: this error is returned whenever an unbalanced paren is present, even if it is not the last token
  // so this error is displayed when sub-expressions are being entered, which could be confusing.
  const incompleteExpressionError: MpParseResult = {
    errorType: 'incompleteExpression',
    errorMessage:
      'Ensure that parenthetical clauses are balanced and appended.',
  }
  //Split on whitespace, check that we only have a single boolean operator type and that it is not the first or last token
  let i = 0
  for (let token of processedTokens) {
    let isBool = booleanToken.test(token)
    if (isBool && i == 0) {
      return initialBooleanError
    }

    if (isBool && i === tokens.length - 1) {
      return trailingBooleanError
    }

    if (isBool && !firstBoolean) {
      firstBoolean = booleanOperatorFromToken(token)
    } else if (isBool && firstBoolean) {
      let nextBool = booleanOperatorFromToken(token)
      if (nextBool !== firstBoolean) {
        return multipleBooleanError
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
        return incompleteExpressionError
      }
      // incomplete VIDs
      if (token === 'NOT' || token.split(' ').pop() === 'NOT') {
        return {
          errorType: 'incompleteNOT',
          errorMessage: 'NOT operator must be followed by a valid #VID.',
        }
      }

      if (token !== exprPlaceholder) {
        return {
          errorType: 'invalidToken',
          errorMessage: `Token '${token}' does not match the expected format.`,
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
