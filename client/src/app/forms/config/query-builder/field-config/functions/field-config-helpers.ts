import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormRowOptions } from '@app/forms/wrappers/form-row/form-row.wrapper'

export const withStatic = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    wrappers: ['form-row'],
    props: {
      ...i.props,
      formRowOptions: <FormRowOptions>{ spanIndexed: [8, 16] },
    },
  }))

export const withRecursive = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    props: {
      ...i.props,
    },
  }))

export const withExpressions = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    expressions: {
      ...i.expressions,
      hide: (field: FormlyFieldConfig) => {
        return field.key !== field.parent?.props?.selectedKey
      },
      'props.size': (field: FormlyFieldConfig) => {
        // if (field.parent?.props?.isRootFilter === undefined) {
        //   console.log('props.size expression isRootFilter:', field.parent)
        // }
        return field.parent?.props?.isRootFilter ? 'default' : 'small'
      },
    },
  }))
export const sortByKey = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) => String(a.key).localeCompare(String(b.key)))
