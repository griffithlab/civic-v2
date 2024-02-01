import { CommonModule } from '@angular/common'
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcActivityFeed } from '../activity-feed.component'
import { CvcActivityFeedSettingsButton } from '../activity-feed-settings/activity-feed-settings.component'
import {
  CvcActivityFeedFilters,
  CvcActivityFeedInfo,
  CvcActivityFeedSettings,
} from '../activity-feed.types'
import { Maybe } from 'graphql/jsutils/Maybe'
import { EventAction } from '@app/generated/civic.apollo'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { PushPipe } from '@ngrx/component'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzSpaceModule } from 'ng-zorro-antd/space'

export const cvcActivityFeedSettingsDefaults = {
  pageSize: 25,
  includeAutomatedEvents: false,
}

@Component({
  selector: 'cvc-activity-feed-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PushPipe,
    NzFormModule,
    NzCheckboxModule,
    NzGridModule,
    NzButtonModule,
    NzPopoverModule,
    NzIconModule,
    NzGridModule,
    NzCardModule,
    NzSelectModule,
    NzSpaceModule,
    CvcActivityFeed,
    CvcActivityFeedSettingsButton,
  ],
  templateUrl: './activity-feed-card.component.html',
  styleUrl: './activity-feed-card.component.less',
})
export class CvcActivityFeedCard {
  // settings
  pageSize: WritableSignal<number>
  includeAutomatedEvents: WritableSignal<boolean> = signal(false)
  feedSettings: Signal<CvcActivityFeedSettings>

  // filters
  feedFilters: Signal<CvcActivityFeedFilters>
  originatingUserId: WritableSignal<number | null>
  organizationId: WritableSignal<number | null>
  eventType: WritableSignal<EventAction | null>

  feedInfo: WritableSignal<Maybe<CvcActivityFeedInfo>>

  settingsOptions = {
    pageSizes: [5, 10, 25, 50, 100],
  }

  settingsDefaults = {
    pageSize: 25,
    includeAutomatedEvents: false,
  }

  constructor() {
    this.originatingUserId = signal(null)
    this.organizationId = signal(null)
    this.eventType = signal(null)
    this.pageSize = signal(this.settingsDefaults.pageSize)
    this.includeAutomatedEvents = signal(
      this.settingsDefaults.includeAutomatedEvents
    )
    this.feedSettings = computed(() => ({
      pageSize: this.pageSize(),
      includeAutomatedEvents: this.includeAutomatedEvents(),
    }))
    this.feedFilters = computed(() => ({
      originatingUserId: this.originatingUserId() ?? undefined,
      organizationId: this.organizationId() ?? undefined,
      eventType: this.eventType() ?? undefined,
    }))
    this.feedInfo = signal({
      loading: false,
      actionCount: { unfiltered: 999 },
      participants: [],
    })
  }
}
