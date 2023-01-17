import { Component, Input, OnInit } from '@angular/core'
import {
  OrganizationMembersFieldsFragment,
  UserRole,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-user-card',
  templateUrl: './user-card.component.html',
})
export class CvcUserCardComponent implements OnInit {
  @Input() user!: OrganizationMembersFieldsFragment

  icon!: string

  ngOnInit() {
    if (this.user == undefined) {
      throw new Error('Must pass a user into user card')
    }

    switch (this.user.role) {
      case UserRole.Admin:
        this.icon = 'civic-admin'
        break
      case UserRole.Editor:
        this.icon = 'civic-editor'
        break
      case UserRole.Curator:
        this.icon = 'civic-curator'
        break
      default:
        this.icon = 'civic-curator'
    }
  }
}
