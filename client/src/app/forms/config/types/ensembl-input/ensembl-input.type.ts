import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/models';

@Component({
  selector: 'cvc-ensembl-input-type',
  templateUrl: './ensembl-input.type.html',
  styleUrls: ['./ensembl-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnsemblInputType extends FieldType {
  formControl!: FormControl;

  defaultOptions = {
    templateOptions: {
      label: 'Ensembl Version',
      helpText: 'Enter a valid Ensembl database version (e.g. 75).'
    },
    validators: {
      validation: ['ensembl-version']
    }
  }
}

export const ensemblVersionValidator: ValidatorOption = {
  name: 'ensembl-version',
  validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
    if (c.value === undefined) {
      return null;
    } else {
      let versionNum = +c.value;
      if (versionNum < 76 || versionNum > 150) {
        return { 'ensembl-version': true };
      }
      return null;
    }
  },
};

export const ensemblVersionValidationMessage: ValidationMessageOption = {
  name: 'ensembl-version',
  message: (_err: any, field: FormlyFieldConfig): string => {
    return `${field.formControl?.value} is not a valid version of Ensembl. Must be an number between 76 and the latest version of Ensembl.`;
  }
}


export const ensemblInputTypeOption: TypeOption = {
  name: 'cvc-ensembl-input',
  component: EnsemblInputType,
  wrappers: ['form-field'],
};
