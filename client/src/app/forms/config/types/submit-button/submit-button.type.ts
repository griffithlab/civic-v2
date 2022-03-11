import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import {TypeOption} from "@ngx-formly/core/lib/models";

@Component({
  selector: 'cvc-submit-button-type',
  templateUrl: './submit-button.type.html',
  styleUrls: ['./submit-button.type.less']
})
export class SubmitButtonComponent extends FieldType<FieldTypeConfig> {
  _selectedOrg: Maybe<Organization> = undefined;

  get selectedOrg(): Maybe<Organization> {
    return this._selectedOrg;
  }

  set selectedOrg(org: Maybe<Organization>) {
    this._selectedOrg = org;
    if(this.formControl) { this.formControl.setValue(org); }
  }

  defaultOptions = {
    templateOptions: {
      submitLabel: 'Submit',
      submitSize: 'small'
    }
  }

  constructor() {
    super();
  }
}

export const SubmitButtonTypeOption: TypeOption = {
  name: 'org-submit-button',
  component: SubmitButtonComponent
}
