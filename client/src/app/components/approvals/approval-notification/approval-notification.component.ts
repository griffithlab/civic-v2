import { Component, input, computed } from '@angular/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { ApprovalStatus } from '@app/generated/civic.apollo'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { DatePipe } from '@angular/common'

export interface NotificationApproval {
  id: number
  status: ApprovalStatus
  lastReviewed: any
  organization: {
    id: number
    name: string
    isApprovedVcep: boolean
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
    DatePipe,
    CvcPipesModule,
  ],
  templateUrl: './approval-notification.component.html',
  styleUrl: './approval-notification.component.less',
})
export class CvcApprovalNotificationComponent {
  approval = input.required<NotificationApproval>({
    alias: 'cvcApproval',
  })

  isApprovedVcep = computed(() => this.approval().organization.isApprovedVcep)

  color = computed(() =>
    getEntityColor(this.isApprovedVcep() ? 'VcepApproval' : 'Approval')
  )

  alertType = computed(() => (this.isApprovedVcep() ? 'warning' : 'info'))
}
