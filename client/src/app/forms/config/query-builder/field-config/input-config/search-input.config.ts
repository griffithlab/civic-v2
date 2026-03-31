import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import {
  AmpLevel,
  EnumSearchOperator,
  FloatSearchOperator,
  IntSearchOperator,
  OntologyTermSearchOperator,
  StringSearchOperator,
  VariantDeprecationReason,
} from '@app/generated/civic.apollo'

const BOOLEAN_INPUT = [
  {
    key: 'value',
    type: 'base-checkbox',
  },
]
const STRING_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: StringSearchOperator.Contains,
    props: {
      placeholder: 'Select Operator',
      options: getSelectOptions('StringSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-input',
    defaultValue: '',
    props: {
      required: true,
      placeholder: 'Enter search term',
    },
  },
]
const ONTOLOGY_TERM_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: OntologyTermSearchOperator.Eq,
    props: {
      options: getSelectOptions('OntologyTermSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      required: true,
      placeholder: 'Enter search term',
    },
  },
]
const INT_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: IntSearchOperator.Eq,
    props: {
      options: getSelectOptions('IntSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-integer',
    props: {
      required: true,
      placeholder: 'Enter integer',
    },
  },
]

const EVIDENCE_STATUS_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      required: true,
      options: getSelectOptions('EvidenceItemStatusEnum'),
      placeholder: 'Select Status',
    },
  },
]

const EVIDENCE_DIRECTION_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('EvidenceItemDirectionEnum'),
      placeholder: 'Select Direction',
    },
  },
]

const ASSERTION_DIRECTION_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('AssertionDirection'),
      placeholder: 'Select Direction',
    },
  },
]

const AMP_LEVEL_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('AmpLevel'),
      placeholder: 'Select Level',
    },
  },
]

const EVIDENCE_SIGNIFICANCE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('EvidenceSignificance'),
      placeholder: 'Select Significance',
      optionOverflowSize: 12,
    },
  },
]

const ASSERTION_SIGNIFICANCE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('AssertionSignificance'),
      placeholder: 'Select Significance',
      optionOverflowSize: 12,
    },
  },
]

const EVIDENCE_LEVEL_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('EvidenceLevel'),
      placeholder: 'Select Level',
    },
  },
]

const EVIDENCE_TYPE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('EvidenceType'),
      placeholder: 'Select Type',
    },
  },
]

const VARIANT_ORIGIN_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('VariantOrigin'),
      placeholder: 'Select Type',
    },
  },
]

const ASSERTION_TYPE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('AssertionType'),
      placeholder: 'Select Type',
    },
  },
]

const THERAPY_INTERACTION_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('TherapyInteraction'),
      placeholder: 'Select Interaction Type',
    },
  },
]

const FEATURE_DEPRECATION_REASON_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('FeatureDeprecationReason'),
      placeholder: 'Select Deprecation Reason',
    },
  },
]

const FEATURE_INSTANCE_TYPES_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('FeatureInstanceTypes'),
      placeholder: 'Select Feature Instance Type',
    },
  },
]

const FLOAT_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: FloatSearchOperator.Eq,
    props: {
      options: getSelectOptions('FloatSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-number',
    props: {
      required: true,
      placeholder: 'Enter Number',
    },
  },
]

const VARIANT_DEPRECATION_REASON_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      required: true,
      options: getSelectOptions('VariantDeprecationReason'),
      placeholder: 'Select Reason',
    },
  },
]

const CHROMOSOME_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    props: {
      required: true,
      options: getSelectOptions('Chromosome'),
      placeholder: 'Select Chromosome',
    },
  },
]

const SOURCE_SOURCE_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('SourceSource'),
      placeholder: 'Select Source Type',
    },
  },
]

const REVISION_STATUS_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('RevisionStatus'),
      placeholder: 'Select Status',
    },
  },
]

const MODERATED_ENTITIES_TYPE_SEARCH_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: EnumSearchOperator.Eq,
    props: {
      options: getSelectOptions('EnumSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-select',
    defaultValue: undefined,
    props: {
      required: true,
      options: getSelectOptions('ModeratedEntities'),
      placeholder: 'Select Entity Type',
    },
  },
]

const DNA_BASE_STRING_INPUT = [
  {
    key: 'operator',
    type: 'base-select',
    defaultValue: StringSearchOperator.Contains,
    props: {
      options: getSelectOptions('StringSearchOperator'),
    },
  },
  {
    key: 'value',
    type: 'base-input',
    props: {
      required: true,
      placeholder: 'Enter Bases',
    },
  },
]

export const INPUT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  FloatSearchInput: FLOAT_SEARCH_INPUT,
  FeatureInstanceTypesSearchInput: FEATURE_INSTANCE_TYPES_SEARCH_INPUT,
  FeatureDeprecationReasonTypeSearchInput:
    FEATURE_DEPRECATION_REASON_TYPE_SEARCH_INPUT,
  AmpLevelTypeSearchInput: AMP_LEVEL_TYPE_SEARCH_INPUT,
  AssertionDirectionTypeSearchInput: ASSERTION_DIRECTION_TYPE_SEARCH_INPUT,
  StringSearchInput: STRING_SEARCH_INPUT,
  OntologyTermSearchInput: ONTOLOGY_TERM_INPUT,
  IntSearchInput: INT_INPUT,
  BooleanSearchInput: BOOLEAN_INPUT,
  EvidenceStatusTypeSearchInput: EVIDENCE_STATUS_TYPE_SEARCH_INPUT,
  EvidenceDirectionTypeSearchInput: EVIDENCE_DIRECTION_TYPE_SEARCH_INPUT,
  EvidenceLevelTypeSearchInput: EVIDENCE_LEVEL_TYPE_SEARCH_INPUT,
  EvidenceTypeTypeSearchInput: EVIDENCE_TYPE_TYPE_SEARCH_INPUT,
  AssertionTypeTypeSearchInput: ASSERTION_TYPE_TYPE_SEARCH_INPUT,
  EvidenceSignificanceTypeSearchInput: EVIDENCE_SIGNIFICANCE_TYPE_SEARCH_INPUT,
  AssertionSignificanceTypeSearchInput:
    ASSERTION_SIGNIFICANCE_TYPE_SEARCH_INPUT,
  TherapyInteractionTypeSearchInput: THERAPY_INTERACTION_TYPE_SEARCH_INPUT,
  VariantOriginTypeSearchInput: VARIANT_ORIGIN_TYPE_SEARCH_INPUT,
  VariantDeprecationReasonTypeSearchInput:
    VARIANT_DEPRECATION_REASON_TYPE_SEARCH_INPUT,
  ChromosomeTypeSearchInput: CHROMOSOME_TYPE_SEARCH_INPUT,
  DnaBaseStringInput: DNA_BASE_STRING_INPUT,
  SourceSourceTypeSearchInput: SOURCE_SOURCE_TYPE_SEARCH_INPUT,
  RevisionStatusTypeSearchInput: REVISION_STATUS_TYPE_SEARCH_INPUT,
  ModeratedEntitiesTypeSearchInput: MODERATED_ENTITIES_TYPE_SEARCH_INPUT,
}
