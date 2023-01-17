import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'

@Component({
  selector: 'cvc-cancel-button',
  templateUrl: './cancel-button.type.html',
  styleUrls: ['./cancel-button.type.less'],
})
export class CancelButtonComponent extends FieldType<any> implements OnInit {
  redirectPath: string = '/'
  callOnClick?: () => void

  ngOnInit(): void {
    if (this.field.templateOptions?.onClick) {
      this.callOnClick = this.field.templateOptions?.onClick
    } else if (this.field.templateOptions?.redirectPath) {
      this.redirectPath = this.field.templateOptions?.redirectPath
    }
  }
}

export const CancelButtonType: TypeOption = {
  name: 'cancel-button',
  component: CancelButtonComponent,
}
