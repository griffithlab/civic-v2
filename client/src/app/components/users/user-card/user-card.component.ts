import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { TagInfo } from '@app/components/shared/tag-overflow/tag-overflow.component'
import {
  Maybe,
  OrganizationMembersFieldsFragment,
  UserRole,
} from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcUserCardComponent implements OnInit {
  @Input() user!: OrganizationMembersFieldsFragment

  icon!: string
  organizations: TagInfo[] = []
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
    this.user.organizations.forEach((org) => {
      // convert user Organization into TagInfo
      this.organizations.push({ id: org.id, name: org.name, link: org.url })
    })
  }
}
