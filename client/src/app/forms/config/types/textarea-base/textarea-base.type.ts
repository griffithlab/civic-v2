import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

@Component({
  selector: 'cvc-textarea-base-type',
  templateUrl: './textarea-base.type.html',
  styleUrls: ['./textarea-base.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TextareaBaseType extends FieldType {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      autosize: {
        minRows: 2,
        maxRows: 20
      }
    }
  }
}

export const texareaBaseTypeOption: TypeOption = {
  name: 'cvc-textarea',
  component: TextareaBaseType,
  wrappers: ['form-field'],
};
