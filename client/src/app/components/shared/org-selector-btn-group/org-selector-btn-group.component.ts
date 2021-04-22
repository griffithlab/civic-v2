import {
  Component,
  Input,
  ContentChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { Organization } from '@app/generated/civic.apollo';
import { OrgSelectorBtnDirective } from './org-selector-btn.directive';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent {
  @Input() organizations!: Organization[];
  @Input() mostRecentOrg!: Organization | undefined;
  @Output() orgSelected = new EventEmitter<Organization>();

  @ContentChild(OrgSelectorBtnDirective, {static: false}) button!: OrgSelectorBtnDirective

  get disabled() {
    return this.button.disabled;
  }

  constructor() {}

  selectOrg(org: any): void {
    this.orgSelected.emit(org);
  }
}
