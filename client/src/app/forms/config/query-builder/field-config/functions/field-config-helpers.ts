import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormRowOptions } from '@app/forms/wrappers/form-row/form-row.wrapper'

export const sortByKey = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) => String(a.key).localeCompare(String(b.key)))

export const sortByLabel = (items: FormlyFieldConfig[]): FormlyFieldConfig[] =>
  [...items].sort((a, b) =>
    String(a.props!.label).localeCompare(String(b.props!.label))
  )

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
