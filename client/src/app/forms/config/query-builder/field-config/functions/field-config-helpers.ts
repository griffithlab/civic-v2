import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormRowOptions } from '@app/forms/wrappers/form-row/form-row.wrapper'

export const withStatic = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    wrappers: ['form-row'],
    props: {
      ...i.props,
      filterType: 'static',
      formRowOptions: <FormRowOptions>{ spanIndexed: [8, 16] },
    },
    expressions: {
      hide: (field: FormlyFieldConfig) => {
        return field.key !== field.parent?.props?.selectedKey
      },
    },
  }))

export const withRecursive = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    props: { ...i.props, filterType: 'recursive' },
    expressions: {
      hide: (field: FormlyFieldConfig) => {
        return field.key !== field.parent?.props?.selectedKey
      },
    },
    hooks: {
      onInit: (field: FormlyFieldConfig) => {
        const { form, model, options } = field
        console.log(form, model, options)
      },
    },
  }))

export const sortByKey = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) => String(a.key).localeCompare(String(b.key)))
