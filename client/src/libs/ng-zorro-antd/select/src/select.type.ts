import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-nz-select',
  templateUrl: './select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType<FieldTypeConfig> {}
