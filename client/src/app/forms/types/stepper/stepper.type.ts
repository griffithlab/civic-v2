import { Component, ChangeDetectionStrategy} from '@angular/core'
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
    selector: 'cvc-field-stepper',
    templateUrl: './stepper.type.html',
    styleUrls: ['./stepper.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcFieldStepper extends FieldType {
    isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl?.valid || false;
    }

    return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
  }
 };

