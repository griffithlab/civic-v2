import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

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
