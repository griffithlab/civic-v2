import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-org-submit-button-type',
  templateUrl: './org-submit-button.type.html',
  styleUrls: ['./org-submit-button.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrgSubmitButtonComponent extends FieldType {
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

export const OrgSubmitButtonTypeOption: TypeOption = {
  name: 'org-submit-button',
  component: OrgSubmitButtonComponent
}
