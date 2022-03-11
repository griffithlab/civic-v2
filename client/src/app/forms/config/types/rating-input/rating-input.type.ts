import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/models";

@Component({
  selector: 'cvc-rating-input-type',
  templateUrl: './rating-input.type.html',
  styleUrls: ['./rating-input.type.less'],
})
export class RatingInputType extends FieldType<FieldTypeConfig> {
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
