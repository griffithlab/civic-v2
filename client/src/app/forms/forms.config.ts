import { ConfigOption } from '@ngx-formly/core/lib/models'
import { HasFocusExtension } from './config/extensions/has-focus.extension'
import {
  defaultMessages,
  defaultValidators,
} from './config/validators/default.validators'

export const CvcFormlyConfig: ConfigOption = {
  extras: { immutable: true, lazyRender: true },
  validationMessages: defaultMessages,
  validators: defaultValidators,
  extensions: [HasFocusExtension],
}
