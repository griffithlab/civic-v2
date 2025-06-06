import { Directive, TemplateRef } from '@angular/core'

export type FlaggableOptions = {
  showCount?: boolean
  flaggableContent?: string | TemplateRef<void>
}

@Directive({
    selector: '[cvcFlaggableOptions]',
    standalone: false
})
export class CvcFlaggableOptionsDirective {
  constructor() {}
}
