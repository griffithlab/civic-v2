import { $enum } from 'ts-enum-util'
import {
  AmpLevel,
  AssertionDirection,
  AssertionSignificance,
  AssertionType,
  BooleanOperator,
  Chromosome,
  DateSearchOperator,
  EnumSearchOperator,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceSignificance,
  EvidenceStatus,
  EvidenceType,
  FeatureDeprecationReason,
  FeatureInstanceTypes,
  FloatSearchOperator,
  IntSearchOperator,
  OntologyTermSearchOperator,
  StringSearchOperator,
  TherapyInteraction,
  VariantDeprecationReason,
  VariantOrigin,
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

function defaultLabelFormat(value: string): string {
  const str = value.toLowerCase().replace(/_/g, ' ').split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

export function getSelectOptions(enumType: string) {
  switch (enumType) {
    case 'FeatureInstanceTypes':
      return $enum(FeatureInstanceTypes).map((value) => {
        const label =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        return getOption(label, value)
      })
    case 'FeatureDeprecationReason':
      return $enum(FeatureDeprecationReason).map((value) => {
        const label =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        return getOption(label, value)
      })
    case 'AssertionDirection':
      return $enum(AssertionDirection).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'AssertionType':
      return $enum(AssertionType).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
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
    case 'EvidenceSignificance':
      return $enum(EvidenceSignificance).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'AssertionSignificance':
      return $enum(AssertionSignificance).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'EvidenceType':
      return $enum(EvidenceType).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'AmpLevel':
      return $enum(AmpLevel).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'EvidenceLevel':
      return $enum(EvidenceLevel).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'TherapyInteraction':
      return $enum(TherapyInteraction).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'VariantOrigin':
      return $enum(VariantOrigin).map((value) => {
        return getOption(formatEvidenceEnum(value), value)
      })
    case 'VariantDeprecationReason':
      return $enum(VariantDeprecationReason).map((value) => {
        return getOption(defaultLabelFormat(value), value)
      })
    case 'Chromosome':
      return $enum(Chromosome).map((value) => {
        return getOption(defaultLabelFormat(value), value)
      })
    default:
      return []
  }
}
