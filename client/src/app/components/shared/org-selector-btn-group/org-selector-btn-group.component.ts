import {
  Component,
  OnInit,
  Input,
  HostBinding,
} from '@angular/core';

import {
  Organization
} from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent implements OnInit {
  @Input() organizations!: Organization[] | null | undefined;
  @Input() mostRecentOrgId!: number | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
