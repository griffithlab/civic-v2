import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

const optionText: { [option: string]: string } = {
  1: 'Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.',
  2: 'Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.',
  3: 'Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.',
  4: 'Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.',
  5: 'Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods.'
}

@Component({
  selector: 'cvc-rating-input-type',
  templateUrl: './rating-input.type.html',
  styleUrls: ['./rating-input.type.less'],
})
export class RatingInputType extends FieldType {
  formControl!: FormControl;
  rating?: number;

  defaultOptions = {
  }

  updateField(e: any) {
    this.field.formControl!.setValue(e);
    let to = this.field.templateOptions
    if (to) {
      to.optionText = optionText[e]
    }
  }

  constructor() {
    super();
  }

}

export const RatingInputTypeOption: TypeOption = {
  name: 'rating-input',
  component: RatingInputType,
  wrappers: ['form-field'],
};
