import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormRowOptions } from '@app/forms/wrappers/form-row/form-row.wrapper'

export const sortByKey = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) => String(a.key).localeCompare(String(b.key)))

export const withStatic = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    type: 'formly-group',
    wrappers: ['form-row'],
    props: {
      ...i.props,
      formRowOptions: <FormRowOptions>{
        spanIndexed: [8, 16],
        gutter: [8, 0],
      },
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

export const withHideExpression = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    expressions: {
      ...i.expressions,
      hide: (field: FormlyFieldConfig) => {
        return field.key !== field.parent?.props?.selectedKey
      },
    },
  }))

export const withSizeExpression = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    expressions: {
      ...i.expressions,
      'props.size': (field: FormlyFieldConfig) => {
        let depth = 0
        let current = field.parent
        while (current) {
          if (current.key === 'query') {
            break
          }
          if (current.key === 'subFilters') {
            depth++
          }
          current = current.parent
        }
        return depth > 1 ? 'small' : 'default'
      },
    },
  }))
export const withSmallSize = (
  items: FormlyFieldConfig[]
): FormlyFieldConfig[] =>
  items.map((i) => ({
    ...i,
    props: {
      ...i.props,
      size: 'small',
    },
  }))
