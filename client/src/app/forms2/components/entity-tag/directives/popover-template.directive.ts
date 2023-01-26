import { Directive, Input, TemplateRef } from '@angular/core'

@Directive({
  selector: '[cvcPopoverTemplate]',
})
export class CvcPopoverTemplate {
  @Input("cvcPopoverTemplate") name?: string
  constructor(public template: TemplateRef<any>) {}
}
