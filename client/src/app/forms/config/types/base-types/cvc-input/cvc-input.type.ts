import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-input-base',
  templateUrl: './cvc-input.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcInputType extends FieldType<FieldTypeConfig> {}
