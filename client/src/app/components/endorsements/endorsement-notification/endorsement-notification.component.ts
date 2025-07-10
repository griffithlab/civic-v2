import { Component, input } from '@angular/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { EndorsementStatus } from '@app/generated/civic.apollo'

export interface NotificationEndorsement {
  id: number
  status: EndorsementStatus
  lastReviewed: any
  organization: {
    id: number
    name: string
  }
}

@Component({
  selector: 'cvc-endorsement-notification',
  imports: [
    NzAlertModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    CvcOrganizationTagModule,
    CvcPipesModule,
  ],
  templateUrl: './endorsement-notification.component.html',
  styleUrl: './endorsement-notification.component.less',
})
export class CvcEndorsementNotificationComponent {
  endorsement = input.required<NotificationEndorsement>({
    alias: 'cvcEndorsement',
  })
}
