import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-nz-input',
  templateUrl: './input.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig> {}
