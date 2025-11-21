import { $enum } from 'ts-enum-util'
import {
  BooleanOperator,
  DateSearchOperator,
  EnumSearchOperator,
  EvidenceDirection,
  EvidenceStatus,
  FloatSearchOperator,
  IntSearchOperator,
  OntologyTermSearchOperator,
  StringSearchOperator,
} from '@app/generated/civic.apollo'
import {
  formatBooleanOperator,
  formatDateSearchOperator,
  formatIntFloatOperator,
  formatOntologyTermSearchOperator,
  formatStringSearchOperator,
} from '@app/core/utilities/enum-formatters/format-operator-enums'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'

const getOption = function (label: string, value: string) {
  return { label: label, value: value }
}

export function getSelectOptions(enumType: string) {
  switch (enumType) {
    case 'StringSearchOperator':
      return $enum(StringSearchOperator).map((value) => {
        return getOption(formatStringSearchOperator(value), value)
      })
    case 'BooleanOperator':
      return $enum(BooleanOperator).map((value) => {
        return getOption(formatBooleanOperator(value), value)
      })
    case 'DateSearchOperator':
      return $enum(DateSearchOperator).map((value) => {
        return getOption(formatDateSearchOperator(value), value)
      })
    case 'EnumSearchOperator':
      return $enum(EnumSearchOperator).map((value) => {
        return getOption(formatIntFloatOperator(value), value)
      })
    case 'FloatSearchOperator':
      return $enum(FloatSearchOperator).map((value) => {
        return getOption(formatIntFloatOperator(value), value)
      })
    case 'IntSearchOperator':
      return $enum(IntSearchOperator).map((value) => {
        return getOption(formatIntFloatOperator(value), value)
      })
    case 'OntologyTermSearchOperator':
      return $enum(OntologyTermSearchOperator).map((value) => {
        return getOption(formatOntologyTermSearchOperator(value), value)
      })
    case 'EvidenceItemStatusEnum':
      return $enum(EvidenceStatus).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'EvidenceItemDirectionEnum':
      return $enum(EvidenceDirection).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    default:
      return []
  }
}
