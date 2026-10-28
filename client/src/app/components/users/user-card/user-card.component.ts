import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Signal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { TagInfo } from '@app/components/shared/tag-overflow/tag-overflow.component'
import {
  Maybe,
  OrganizationMembersFieldsFragment,
  UserRole,
} from '@app/generated/civic.apollo'
import { map } from 'rxjs/operators'

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
  currentOrganizationId: Signal<number>
  isApprover: boolean = false
  constructor(
    private route: ActivatedRoute
  ) {
    this.currentOrganizationId = toSignal(
      this.route.params.pipe(
        map(params => +params['organizationId']),
      ),
      { requireSync: true }
    );
  }

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


    if (this.user.organizationsWithApprovalPrivileges.map((org) => org.id).includes(this.currentOrganizationId())) {
      this.isApprover = true
    }
  }
}
