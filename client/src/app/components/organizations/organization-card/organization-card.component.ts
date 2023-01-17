import { Component, Input, OnInit } from '@angular/core'
import {
  OrganizationDetailFieldsFragment,
  OrganizationGroupsFieldsFragment,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.less'],
})
export class CvcOrganizationCardComponent implements OnInit {
  @Input() organization!: OrganizationDetailFieldsFragment
  // @Input() organization!: OrganizationGroupsFieldsFragment;
  @Input() inCard: boolean = true

  includeSubStats: any = true

  ngOnInit() {
    if (this.organization == undefined) {
      throw new Error('Must pass a organization into organization card')
    }
  }
}
