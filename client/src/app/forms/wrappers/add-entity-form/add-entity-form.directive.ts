import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[addEntityFormHost]',
  standalone: false,
})
export class AddEntityFormHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log('AddEntityFormHostDirective constructor()')
  }
}
