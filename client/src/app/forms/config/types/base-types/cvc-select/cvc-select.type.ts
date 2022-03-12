import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-select',
  templateUrl: './cvc-select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSelectType extends FieldType<FieldTypeConfig> {}
