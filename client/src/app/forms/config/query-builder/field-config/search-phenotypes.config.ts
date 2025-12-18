import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  BooleanOperator,
  InputMaybe,
  IntSearchInput,
  OntologyTermSearchInput,
  PhenotypeSearchFilter,
  StringSearchInput,
} from '@generated/civic.apollo'

export type PhenotypeSearchFilterREF = {
  booleanOperator?: InputMaybe<BooleanOperator>
  description?: InputMaybe<StringSearchInput>
  hpoId?: InputMaybe<OntologyTermSearchInput>
  id?: InputMaybe<IntSearchInput>
  name?: InputMaybe<StringSearchInput>
  subFilters?: InputMaybe<Array<PhenotypeSearchFilter>>
}

export const searchPhenotypesDefaultKey = 'name'
export const searchPhenotypesFieldOptions: FormlyFieldConfig[] = [
  {
    key: 'name',
    props: { label: 'Name' },
    fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
]
