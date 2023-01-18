import { ActivatedRoute } from '@angular/router'
import { ExtensionOption } from '@ngx-formly/core/lib/models'
import { ObserveQueryParamExtension } from './observe-query-param.extension'

export function registerCvcExtensions(route: ActivatedRoute) {
  return {
    extensions: [
      {
        name: 'observeQueryParam',
        extension: new ObserveQueryParamExtension(route),
      },
    ] as ExtensionOption[],
  }
}
