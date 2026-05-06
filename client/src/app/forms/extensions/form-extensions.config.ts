import { ActivatedRoute } from '@angular/router'
import { ObserveQueryParamExtension } from './observe-query-param.extension'

// mirror the internal shape of ExtensionOption
// export interface ExtensionOption {
//   name: string
//   extension: FormlyExtension
//   priority?: number
// }

export function registerCvcExtensions(route: ActivatedRoute) {
  return {
    extensions: [
      {
        name: 'observeQueryParam',
        extension: new ObserveQueryParamExtension(route),
      },
    ], //as ExtensionOption[],
  }
}
