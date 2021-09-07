import { Component, EventEmitter, OnInit, Output, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  Maybe,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface VariantTypeSelectorModel {
  id: Maybe<number>,
  soid: Maybe<string>,
  name: Maybe<string>,
}

export const variantTypeSelectorInitialValue = {
  id: undefined,
  soid: undefined,
  name: undefined
};

@Component({
  selector: 'cvc-variant-type-selector',
  templateUrl: './variant-type-selector.form.html',
  styleUrls: ['./variant-type-selector.form.less'],
  encapsulation: ViewEncapsulation.None,
})
export class VariantTypeSelectorForm implements OnInit, OnDestroy {
  @Output() typeSelected = new EventEmitter<Maybe<any>>();
  formModel: VariantTypeSelectorModel = variantTypeSelectorInitialValue;
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor() {
    this.fields = [
      { key: 'id' },
      {
        key: 'soid',
        defaultValue: '',
      },
      {
        key: 'name',
        className: 'name-field',
        type: 'variant-type-typeahead',
        templateOptions: {
          required: true,
          triggerParentSubmit: () => { this.onSubmit(); },
          placeholder: 'Search variant types'
        }
      },
      {
        type: 'multi-field-add-btn',
        className: 'add-button',
        templateOptions: {
          label: 'Add Type',
        },
        expressionProperties: {
          'templateOptions.disabled': '!model.name',
        }
      }
    ]

  }

  onSubmit(): void {
    console.log('variant-type-select form submitted.');
    this.typeSelected.emit(this.formModel);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
