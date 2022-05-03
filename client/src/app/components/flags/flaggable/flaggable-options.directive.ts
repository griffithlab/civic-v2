import { Directive, TemplateRef } from '@angular/core';

export type FlaggableOptions = {
  showCount?: boolean
  flaggableContent?: string | TemplateRef<void>
}

@Directive({
  selector: '[cvcFlaggableOptions]'
})
export class CvcFlaggableOptionsDirective {

  constructor() { }

}
