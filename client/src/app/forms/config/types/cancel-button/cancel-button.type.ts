import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-cancel-button',
  templateUrl: './cancel-button.type.html',
  styleUrls: ['./cancel-button.type.less']
})
export class CancelButtonComponent extends FieldType implements OnInit {
  redirectPath: string = '/'
  ngOnInit(): void {
    if (this.field.templateOptions?.redirectPath) {
      this.redirectPath = this.field.templateOptions?.redirectPath
    }
  }
}

export const CancelButtonType: TypeOption = {
  name: 'cancel-button',
  component: CancelButtonComponent,
}
