import { INPUT_FIELD_CONFIG } from './search-input.config'
import { FormlyFieldConfig } from '@ngx-formly/core'

const COORDINATE_SEARCH_STRUCT = [
  {
    key: 'chromosome',
    props: { label: 'Chromosome' },
    fieldGroup: INPUT_FIELD_CONFIG['ChromosomeTypeSearchInput'],
  },
  {
    key: 'referenceBases',
    props: { label: 'Reference Bases' },
    fieldGroup: INPUT_FIELD_CONFIG['DnaBaseStringInput'],
  },
  {
    key: 'start',
    props: { label: 'Start' },
    fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
  },
  {
    key: 'stop',
    props: { label: 'Stop' },
    fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
  },
  {
    key: 'variantBases',
    props: { label: 'Variant Bases' },
    fieldGroup: INPUT_FIELD_CONFIG['DnaBaseStringInput'],
  },
]

export const STRUCT_FIELD_CONFIG: Record<string, FormlyFieldConfig[]> = {
  CoordinateSearchStruct: COORDINATE_SEARCH_STRUCT,
}
