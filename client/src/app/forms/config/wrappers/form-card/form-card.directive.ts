import { Directive } from '@angular/core'

@Directive({
  selector: '.cvc-form-card-control',
})
export class FormCardDirective {
  constructor() {
    console.log('FormCardDirective constructed.')
  }
}
