import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import { FormlyFieldConfig } from '@ngx-formly/core'

export const searchDiseasesFilterOptions: FormlyFieldConfig[] = [
  {
    key: 'name',
    props: {
      label: 'Disease Name',
    },
    fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
  {
    key: 'diseaseAliases',
    props: {
      label: 'Disease Aliases',
    },
    fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
  {
    key: 'id',
    props: { label: 'ID' },
    fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
  },
  {
    key: 'doid',
    props: { label: 'Disease Ontology ID' },
    fieldGroup: INPUT_FIELD_CONFIG['OntologyTermSearchInput'],
  },
  {
    key: 'deprecated',
    props: { label: 'Deprecation Status' },
    fieldGroup: INPUT_FIELD_CONFIG['BooleanSearchInput'],
  },
].map((option: FormlyFieldConfig) => {
  // merge formly boilerplate
  return {
    ...option,
    type: 'formly-group',
    wrappers: ['form-row'],
    props: { ...option.props, formRowOptions: { span: 12 } },
  }
})
