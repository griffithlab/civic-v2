import { FormlyFieldConfig } from '@ngx-formly/core'
import { CvcBaseInputFieldConfig } from '@app/forms/types/base/input/input.type'
import { CvcBaseSelectFieldConfig } from '@app/forms/types/base/select/select.type'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'

export const stringOperatorOptions = [
  { label: 'Contains', value: 'CONTAINS' },
  { label: 'Equals', value: 'EQ' },
  { label: 'Not Equal', value: 'NE' },
  { label: 'Starts With', value: 'STARTS_WITH' },
  { label: 'Does Not Contain', value: 'DOES_NOT_CONTAIN' },
]

export const intOperatorOptions = [
  { label: 'Equals', value: 'EQ' },
  { label: 'Not Equal', value: 'NE' },
  { label: 'Less Than', value: 'LT' },
  { label: 'Greater Than', value: 'GT' },
  { label: 'Less or Equal', value: 'LE' },
  { label: 'Greater or Equal', value: 'GE' },
]

export const diseaseSearchFields: FormlyFieldConfig[] = [
  {
    key: 'filters',
    fieldGroup: [
      // ID Search
      {
        key: 'id',
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: { span: 24 },
        },
        fieldGroup: [
          <CvcBaseSelectFieldConfig>{
            key: 'operator',
            type: 'base-select',
            props: {
              label: 'ID Operator',
              options: intOperatorOptions,
            },
            defaultValue: 'EQ',
          },
          <CvcBaseInputFieldConfig>{
            key: 'value',
            type: 'base-input',
            props: {
              label: 'CIViC ID',
              placeholder: 'e.g., 8',
              type: 'number',
            },
          },
        ],
      },
      // Name Search
      {
        key: 'name',
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: { span: 24 },
        },
        fieldGroup: [
          <CvcBaseSelectFieldConfig>{
            key: 'operator',
            type: 'base-select',
            props: {
              label: 'Name Operator',
              options: stringOperatorOptions,
            },
            defaultValue: 'CONTAINS',
          },
          <CvcBaseInputFieldConfig>{
            key: 'value',
            type: 'base-input',
            props: {
              label: 'Disease Name',
              placeholder: 'e.g., lung cancer',
            },
          },
        ],
      },
      // DOID Search
      {
        key: 'doid',
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: { span: 24 },
        },
        fieldGroup: [
          <CvcBaseSelectFieldConfig>{
            key: 'operator',
            type: 'base-select',
            props: {
              label: 'DOID Operator',
              options: stringOperatorOptions,
            },
            defaultValue: 'EQ',
          },
          <CvcBaseInputFieldConfig>{
            key: 'value',
            type: 'base-input',
            props: {
              label: 'Disease Ontology ID',
              placeholder: 'e.g., DOID:1324',
            },
          },
        ],
      },
      // Disease Aliases Search
      {
        key: 'diseaseAliases',
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: { span: 24 },
        },
        fieldGroup: [
          <CvcBaseSelectFieldConfig>{
            key: 'operator',
            type: 'base-select',
            props: {
              label: 'Alias Operator',
              options: stringOperatorOptions,
            },
            defaultValue: 'CONTAINS',
          },
          <CvcBaseInputFieldConfig>{
            key: 'value',
            type: 'base-input',
            props: {
              label: 'Disease Alias',
              placeholder: 'Alternative name',
            },
          },
        ],
      },
      // Deprecated Checkbox
      {
        key: 'deprecated',
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: { span: 24 },
        },
        fieldGroup: [
          {
            key: 'value',
            type: 'base-checkbox',
            props: {
              label: 'Include deprecated diseases',
            },
            defaultValue: false,
          },
        ],
      },
    ],
  },
]
