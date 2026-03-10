import { FormlyFieldConfig } from '@ngx-formly/core'
import { getStructOptions } from './get-struct-options'
import { withStatic } from './field-config-helpers'

export function getStructFieldConfig(
  key: string,
  title?: string
): FormlyFieldConfig[] {
  return [
    {
      key: `${key}`,
      type: 'formly-group',
      wrappers: ['query-struct-card'],
      props: {
        label: `${title}`,
        // selectedKey: `${key}`,
        formCardOptions: {
          title: 'matching all of the following conditions:',
          size: 'small',
        },
      },
      fieldGroup: [
        {
          type: 'struct-filter',
          wrappers: [],
          props: {
            structKey: `${key}`,
            isRootFilter: false,
          },
          fieldGroup: withStatic(getStructOptions(key)),
        },
      ],
    },
  ]
}
