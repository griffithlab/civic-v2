import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-nz-checkbox',
  templateUrl: './checkbox.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCheckbox extends FieldType<FieldTypeConfig> {
  override defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: true,
    },
  };
}
