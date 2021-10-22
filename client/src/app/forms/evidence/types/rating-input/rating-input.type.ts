import { AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-rating-input',
  templateUrl: './rating-input.type.html',
  styleUrls: ['./rating-input.type.less'],
})
export class RatingInputComponent extends FieldType {
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

export const RatingInputType = {
  name: 'rating-input',
  component: RatingInputComponent,
  wrappers: ['form-field'],
};
