import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[addEntityFormHost]',
})
export class AddEntityFormHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log('AddEntityFormHostDirective constructor()')
  }
}
