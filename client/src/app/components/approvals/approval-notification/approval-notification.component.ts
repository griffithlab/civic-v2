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
import { NzRateComponent } from 'ng-zorro-antd/rate'
import { FormsModule } from '@angular/forms'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

export interface NotificationApproval {
  id: number
  status: ApprovalStatus
  lastReviewed: any
  organization: {
    id: number
    name: string
    isApprovedVcep: boolean
    isClinvarSubmitter: boolean
  }
}

@Component({
  selector: 'cvc-approval-notification',
  imports: [
    FormsModule,
    NzAlertModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    NzRateComponent,
    NzToolTipModule,
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
  isClinvarSubmitter = computed(() => this.approval().organization.isClinvarSubmitter)

  starRating = computed(() =>{
    if (this.isApprovedVcep()) {
      return 3
    } else if (this.isClinvarSubmitter()) {
      return 1
    } else {
      return 0
    }
  })

  showStars = computed(() => this.starRating() > 0)

  color = computed(() =>
    getEntityColor('Approval')
    //getEntityColor(this.isApprovedVcep() ? 'VcepApproval' : 'Approval')
  )

  //alertType = computed(() => (this.isApprovedVcep() ? 'warning' : 'info'))
}
