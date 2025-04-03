import { Component, input } from '@angular/core'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { feedDefaultFilters } from '@app/components/activities/activity-feed/activity-feed.config'
import { ActivityFeedFilters } from '@app/components/activities/activity-feed/activity-feed.types'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { EndorsementListNodeFragment } from '@app/generated/civic.apollo'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzTagModule } from 'ng-zorro-antd/tag'

@Component({
  selector: 'cvc-endorsement-revisions-tag',
  imports: [
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcActivityFeed,
  ],
  templateUrl: './endorsement-revisions-tag.component.html',
  styleUrl: './endorsement-revisions-tag.component.less',
})
export class CvcEndorsementRevisionsTag {
  cvcEndorsement = input.required<EndorsementListNodeFragment>()
  feedFilters(endorsement: EndorsementListNodeFragment): ActivityFeedFilters {
    return {
      ...feedDefaultFilters,
      linkedEndorsementId: endorsement.id,
      occurredAfter: new Date(endorsement.lastReviewed),
    }
  }
}
