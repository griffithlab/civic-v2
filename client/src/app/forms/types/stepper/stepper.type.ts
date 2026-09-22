import { Component, ChangeDetectionStrategy, signal } from '@angular/core'
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
    selector: 'cvc-field-stepper',
    templateUrl: './stepper.type.html',
    styleUrls: ['./stepper.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcFieldStepper extends FieldType {
  readonly currentStep = signal(0);

  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl?.valid || false;
    }

    return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
  }

  previous_step(): void {
    this.currentStep.update(currentStep => currentStep - 1);
  }

  next_step(): void {
    this.currentStep.update(currentStep => currentStep + 1);
  }
 };