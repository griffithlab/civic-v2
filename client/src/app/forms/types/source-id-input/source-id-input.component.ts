import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'cvc-source-id-input',
  templateUrl: './source-id-input.component.html',
  styleUrls: ['./source-id-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceIdInputComponent extends FieldType {
  formControl!: FormControl;

  defaultOptions = {
    defaultValue: '',
    validation: {
      messages: {
        'minlength': (_err: any, field: FormlyFieldConfig): string => {
          return `Comments must be at least ${field.templateOptions?.minLength} characters in length.`;
        },
        'required': (_err: any, field: FormlyFieldConfig): string => {
          return 'Valid Source ID required.';
        }
      }
    },
    templateOptions: {
      mask: '0*' // allow unbounded numeric input
    },
    hooks: {
      onInit: (field: any) => {
        return field.formControl.valueChanges.pipe(
          distinctUntilChanged(),
          tap((value: any) => {
            console.warn('source-id updated.');
            console.warn(value);
          }))
      }
    }
  };
}

export const SourceIdInputType = {
  name: 'source-id-input',
  component: SourceIdInputComponent,
  wrappers: ['form-field'],
}
