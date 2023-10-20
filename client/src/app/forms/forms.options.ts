import { ConfigOption } from '@ngx-formly/core'
import {
  defaultMessages,
  defaultValidators,
} from './validators/default.validator'

export const CvcFormlyConfig2: ConfigOption = {
  extras: { immutable: false, lazyRender: true },
  validationMessages: defaultMessages,
  validators: defaultValidators,
}
