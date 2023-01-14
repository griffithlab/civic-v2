import { ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { CvcComplexMolecularProfileInputForm } from '@app/forms/complex-molecular-profile-input/complex-molecular-profile-input.form';
import { FormMolecularProfile } from '@app/forms/forms.interfaces';
import { SelectedVariant } from '@app/forms/variant-submit/variant-submit.form';
import { FieldType} from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/models";

@Component({
  selector: 'cvc-molecular-profile-input-type',
  templateUrl: './molecular-profile-input.type.html',
  styleUrls: ['./molecular-profile-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MolecularProfileInputType extends FieldType<any> implements OnInit {
  @ViewChild('complexMolecularProfileInputForm', { static: false}) complexMpForm?: CvcComplexMolecularProfileInputForm
  
  mpId?: number;

  ngOnInit() {
    if(this.field.formControl?.value) {
      if(!this.field.templateOptions) {
        this.field.templateOptions = {}
      }
      this.field.templateOptions.nzSelectedIndex = 1
    }
  }

  onVariantSelected(v: SelectedVariant): void {
    this.field.formControl!.setValue(v.molecularProfile);
  }

  onMpSelected(mp: FormMolecularProfile): void {
    this.field.formControl!.setValue(mp);
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
