import {
  MolecularProfileComponentInput,
  BooleanOperator,
  VariantComponent,
} from '@app/generated/civic.apollo';

const leftParen = /\(/g;
const rightParen = /\)/g;
const booleanToken = /AND|OR/i;
const variantToken = /^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i;
const whitespace = /\s+/;
const exprPlaceholder = 'EXPR';

export interface MpParseError {
  errorMessage: string;
}

export type MpParseResult = MpParseError | MolecularProfileComponentInput;

export function parseMolecularProfile(input: string): MpParseResult {
  let padded = input.replace(leftParen, ' ( ').replace(rightParen, ' ) ');
  return parseSection(padded);
}

function parseSection(section: string): MpParseResult {
  let tokens = section.split(whitespace);
  let firstBoolean: BooleanOperator | undefined = undefined;

  let parenIndex = 0;
  let nestedSegments: string[] = [];
  let processedTokens: string[] = [];
  let nestedResults: MolecularProfileComponentInput[] = [];

  for (let token of tokens) {
    if (token == '(') {
      if (parenIndex != 0) {
        nestedSegments.push(token);
      }
      parenIndex += 1;
    } else if (token == ')') {
      parenIndex -= 1;
      if (parenIndex == 0) {
        let section = parseSection(nestedSegments.join(' '));
        if ('errorMessage' in section) {
          return section;
        } else {
          nestedResults.push(section);
          processedTokens.push(exprPlaceholder);
          nestedSegments = [];
        }
      } else {
        nestedSegments.push(token);
      }
    } else if (parenIndex > 0) {
      nestedSegments.push(token);
    } else {
      processedTokens.push(token);
    }
  }

  //Split on whitespace, check that we only have a single boolean operator type and that it is not the first or last token
  let i = 0;
  for (let token of processedTokens) {
    let isBool = booleanToken.test(token);
    if (isBool && i == tokens.length - 1) {
      return {
        errorMessage:
          'Trailing boolean operator found. You cannot end your profile with an operator.',
      };
    }

    if (isBool && i == 0) {
      return { errorMessage: 'The expression cannot start with AND/OR' };
    }

    if (isBool && !firstBoolean) {
      firstBoolean = booleanOperatorFromToken(token);
    } else if (isBool && firstBoolean) {
      let nextBool = booleanOperatorFromToken(token);
      if (nextBool !== firstBoolean) {
        return {
          errorMessage:
            'You cannot mix and match AND/OR in a single segment. Use parenthesis to logically group your variants.',
        };
      }
    }
    i++;
  }

  let variants: VariantComponent[] = [];

  let segments = processedTokens.join(' ').split(booleanToken);
  for (let token of segments.map((s) => s.trim())) {
    let matchData = variantToken.exec(token);
    if (matchData === null) {
      if (token !== exprPlaceholder) {
        return {
          errorMessage: `Variant ${token} does not match the expected format. The token should be a #VID prepended with an optional NOT.`,
        };
      }
    } else {
      variants.push({
        not: matchData[1] ? true : false,
        variantId: parseInt(matchData[2]),
      });
    }
  }
  return {
    booleanOperator: firstBoolean,
    variantComponents: variants,
    complexComponents: nestedResults,
  };
}

function booleanOperatorFromToken(token: string): BooleanOperator {
  if (token.toUpperCase() == 'AND') {
    return BooleanOperator.And;
  } else {
    return BooleanOperator.Or;
  }
}
