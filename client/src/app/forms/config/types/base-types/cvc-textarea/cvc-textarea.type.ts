import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-textarea-base',
  templateUrl: './cvc-textarea.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcTextareaType extends FieldType<FieldTypeConfig> {}
