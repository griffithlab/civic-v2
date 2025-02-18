import { Component, Input, OnInit } from '@angular/core'
import { FormControlDirective, FormControlStatus } from '@angular/forms'
import { Maybe } from '@app/generated/civic.apollo'

export const statusColorMap = {
  VALID: 'success',
  INVALID: 'error',
  PENDING: 'processing',
  DISABLED: 'default',
}

@Component({
  selector: 'cvc-form-status-tag',
  templateUrl: './form-status-tag.component.html',
  styleUrls: ['./form-status-tag.component.less'],
  standalone: false,
})
export class CvcFormStatusTagComponent {
  _status!: Maybe<FormControlStatus>
  tagColor = 'default'
  @Input()
  set cvcFormControlStatus(status: Maybe<FormControlStatus>) {
    this._status = status
    this.tagColor = status ? statusColorMap[status] : 'default'
  }
  get cvcFormControlStatus(): Maybe<FormControlStatus> {
    return this._status
  }
}
