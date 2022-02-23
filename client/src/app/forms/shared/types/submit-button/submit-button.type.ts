import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Maybe, Organization } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-submit-button',
  templateUrl: './submit-button.type.html',
  styleUrls: ['./submit-button.type.less']
})
export class SubmitButtonComponent extends FieldType {
  _selectedOrg: Maybe<Organization> = undefined;

  get selectedOrg(): Maybe<Organization> {
    return this._selectedOrg;
  }

  set selectedOrg(org: Maybe<Organization>) {
    this._selectedOrg = org;
    this.formControl.setValue(org);
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

export const SubmitButtonType = {
  name: 'org-submit-button',
  component: SubmitButtonComponent
}
