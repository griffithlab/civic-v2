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
  selector: 'cvc-org-selector-btn',
  templateUrl: './org-selector-button.component.html',
  styleUrls: ['./org-selector-button.component.less']
})
export class OrgSelectorButtonComponent implements OnInit {
  @Input() organizations!: Organization[] | null | undefined;
  @Input() mostRecentOrgId!: number | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
