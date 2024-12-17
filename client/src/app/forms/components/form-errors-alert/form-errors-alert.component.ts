import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'cvc-form-errors-alert',
    templateUrl: './form-errors-alert.component.html',
    styleUrls: ['./form-errors-alert.component.less'],
    standalone: false
})
export class CvcFormErrorsAlertComponent implements OnInit {
  @Input() errors!: any

  constructor() {}

  ngOnInit(): void {
    if (this.errors.length == 1) {
      this.errors = this.errors[0].split('|')
    }
  }
}
