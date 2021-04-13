import {
  Component,
  Input,
  AfterViewInit,
  ContentChild,
} from '@angular/core';

import {
  Organization
} from '@app/generated/civic.apollo';

import { OrgSelectorBtnDirective } from './org-selector-btn.directive';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent implements AfterViewInit {
  @Input() organizations!: Organization[] | null | undefined;
  @Input() mostRecentOrgId!: number | null | undefined;

  @ContentChild(OrgSelectorBtnDirective, {static: false}) button!: OrgSelectorBtnDirective
 

  constructor() { }

  get disabled() {
    return this.button.disabled;
  }

  ngAfterViewInit(): void {
    
  }
}
