import { Component, Input, EventEmitter, OnInit, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  Maybe,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface TypeInputModel {
  id: Maybe<number>,
  soid: Maybe<string>,
  name: Maybe<string>,
}


@Component({
  selector: 'cvc-variant-type-selector',
  templateUrl: './variant-type-selector.form.html',
  styleUrls: ['./variant-type-selector.form.less']
})
export class VariantTypeSelectorForm implements OnInit, OnDestroy {
  @Output() typeSelected = new EventEmitter<Maybe<any>>();
  formModel: TypeInputModel = { id: undefined, soid: undefined, name: undefined };
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];


  constructor() {
    this.fields = [
      { key: 'id' },
      {
        key: 'name',
        defaultValue: '',
      },
      {
        key: 'soid',
        className: 'soid-field',
        type: 'variant-type-typeahead',
        templateOptions: {
          required: true,
          triggerParentSubmit: () => { this.onSubmit(); },
          placeholder: 'Search variant types'
        }
      }
    ]

  }

  onSubmit(): void {
    console.log('source-select form submitted.');
    this.typeSelected.emit(this.formModel);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
