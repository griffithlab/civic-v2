import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-multi-field-add-btn',
  templateUrl: './multi-field-add-btn.type.html',
  styleUrls: ['./multi-field-add-btn.type.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFieldAddBtnComponent extends FieldType {

  constructor() { super(); }

}

export const MultiFieldAddBtnType = {
  name: 'multi-field-add-btn',
  component: MultiFieldAddBtnComponent,
}
