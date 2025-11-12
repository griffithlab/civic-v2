import {
  enumFormatters,
  FormatEnumOption,
} from '@app/core/utilities/enum-formatters/format.common'

export function formatBooleanOperator(
  operator: string,
  caseOption: FormatEnumOption = 'lower'
) {
  const fmt: (s: string) => string = enumFormatters[caseOption]

  switch (operator) {
    //BooleanOperator
    case 'AND':
      return fmt('all')
    case 'OR':
      return fmt('any')

    default:
      return fmt(operator)
  }
}

export function formatDateSearchOperator(
  operator: string,
  caseOption: FormatEnumOption = 'lower'
) {
  const fmt: (s: string) => string = enumFormatters[caseOption]

  switch (operator) {
    // DateSearchOperator
    case 'AFTER':
    case 'BEFORE':
    case 'ON':
    case 'ON_OR_AFTER':
    case 'ON_OR_BEFORE':
      return fmt(operator)

    default:
      return fmt(operator)
  }
}

export function formatIntFloatOperator(
  operator: string,
  caseOption: FormatEnumOption = 'lower'
) {
  const fmt: (s: string) => string = enumFormatters[caseOption]

  switch (operator) {
    // EnumSearchOperator
    // FloatSearchOperator
    // IntSearchOperator
    case 'EQ':
      return fmt('equal to')
    case 'NE':
      return fmt('not equal to')
    case 'GE':
      return fmt('greater than or equal to')
    case 'GT':
      return fmt('greater than')
    case 'LT':
      return fmt('less than or equal to')
    case 'LE':
      return fmt('less than')

    default:
      return fmt(operator)
  }
}

export function formatOntologyTermSearchOperator(
  operator: string,
  caseOption: FormatEnumOption = 'lower'
) {
  const fmt: (s: string) => string = enumFormatters[caseOption]

  switch (operator) {
    // OntologyTermSearchOperator
    case 'EQ_SELF_AND_SIBLINGS':
      return fmt('term and siblings')
    case 'EQ_SELF_OR_ALL_ANCESTORS':
      return fmt('term and all ancestors')
    case 'EQ_SELF_OR_ALL_DESCENDANTS':
      return fmt('term and all descendants')
    case 'EQ_SELF_OR_DIRECT_CHILDREN':
      return fmt('term and all child terms')
    case 'EQ_SELF_OR_DIRECT_PARENT':
      return fmt('term and all parent terms')
    case 'EQ':
      return fmt('equal to')
    case 'NE':
      return fmt('not equal to')

    default:
      return fmt(operator)
  }
}

export function formatStringSearchOperator(
  operator: string,
  caseOption: FormatEnumOption = 'lower'
) {
  const fmt: (s: string) => string = enumFormatters[caseOption]

  switch (operator) {
    // StringSearchOperator
    case 'CONTAINS':
    case 'DOES_NOT_CONTAIN':
    case 'STARTS_WITH':
      return fmt(operator)
    case 'EQ':
      return fmt('equal to')
    case 'NE':
      return fmt('not equal to')

    default:
      return fmt(operator)
  }
}
