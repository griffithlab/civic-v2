import { Component, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CvcComplexMolecularProfileInputForm } from '@app/forms/complex-molecular-profile-input/complex-molecular-profile-input.form';
import { SelectedVariant } from '@app/forms/variant-submit/variant-submit.form';
import { FieldType} from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-molecular-profile-input-type',
  templateUrl: './molecular-profile-input.type.html',
  styleUrls: ['./molecular-profile-input.type.less'],
})
export class MolecularProfileInputType extends FieldType {
  @ViewChild('complexMolecularProfileInputForm', { static: false}) complexMpForm?: CvcComplexMolecularProfileInputForm
  formControl!: FormControl;
  mpId?: number;

  onVariantSelected(v: SelectedVariant): void {
    this.field.formControl!.setValue(v.molecularProfileId);
  }

  onMpSelected(id: number): void {
    this.field.formControl!.setValue(id);
  }

  clear(): void {
    this.field.formControl!.setValue(undefined);
    this.complexMpForm?.resetForm()
  }

  constructor() {
    super();
  }
}

export const MolecularProfileInputTypeOption: TypeOption = {
  name: 'molecular-profile-input',
  component: MolecularProfileInputType,
  wrappers: ['form-field'],
};
