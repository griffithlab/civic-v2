import {
  Component,
  Input,
  ContentChild,
  OnInit,
} from '@angular/core';

import { Organization } from '@app/generated/civic.apollo';
import { OrgSelectorBtnDirective } from './org-selector-btn.directive';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent implements OnInit {
  @Input() organizations!: Organization[] | null | undefined;
  @Input() mostRecentOrgId!: number | null | undefined;

  @ContentChild(OrgSelectorBtnDirective, {static: false}) button!: OrgSelectorBtnDirective
  get disabled() {
    return this.button.disabled;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
