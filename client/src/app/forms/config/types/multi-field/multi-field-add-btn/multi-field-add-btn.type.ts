import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-multi-field-add-btn-type',
  templateUrl: './multi-field-add-btn.type.html',
  styleUrls: ['./multi-field-add-btn.type.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFieldAddBtnType extends FieldType {

  constructor() { super(); }

}

export const MultiFieldAddBtnTypeOption = {
  name: 'cvc-multi-field-add-btn',
  component: MultiFieldAddBtnType,
}
