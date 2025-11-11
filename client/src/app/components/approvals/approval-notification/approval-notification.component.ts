import { Component, input } from '@angular/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { ApprovalStatus } from '@app/generated/civic.apollo'

export interface NotificationApproval {
  id: number
  status: ApprovalStatus
  lastReviewed: any
  organization: {
    id: number
    name: string
  }
}

@Component({
  selector: 'cvc-approval-notification',
  imports: [
    NzAlertModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    CvcOrganizationTagModule,
    CvcPipesModule,
  ],
  templateUrl: './approval-notification.component.html',
  styleUrl: './approval-notification.component.less',
})
export class CvcApprovalNotificationComponent {
  approval = input.required<NotificationApproval>({
    alias: 'cvcApproval',
  })
}
