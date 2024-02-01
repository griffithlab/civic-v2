import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  Signal,
  SimpleChanges,
  WritableSignal,
  computed,
  input,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import {
  CvcActivityFeed,
  cvcActivityFeedSettingsOptions,
} from '../activity-feed.component'
import { CvcActivityFeedSettingsButton } from '../activity-feed-settings/activity-feed-settings.component'
import {
  CvcActivityFeedFilters,
  CvcActivityFeedInfo,
  CvcActivityFeedSettings,
} from '../activity-feed.types'
import { Maybe } from 'graphql/jsutils/Maybe'
import {
  EventAction,
  SubscribableQueryInput,
} from '@app/generated/civic.apollo'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { PushPipe } from '@ngrx/component'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

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
    NzMenuModule,
    NzCheckboxModule,
    NzGridModule,
    NzButtonModule,
    NzPopoverModule,
    NzIconModule,
    NzGridModule,
    NzCardModule,
    NzSelectModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcActivityFeed,
    CvcActivityFeedSettingsButton,
  ],
  templateUrl: './activity-feed-card.component.html',
  styleUrl: './activity-feed-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedCard implements OnChanges {
  @Input() cvcSubject?: SubscribableQueryInput
  @Input() cvcFilterDisplay?: 'select' | 'list' | 'none' = 'select'

  // SETTINGS
  pageSize: WritableSignal<number>
  includeAutomatedEvents: WritableSignal<boolean> = signal(false)
  feedSettings: Signal<CvcActivityFeedSettings>

  // FILTERS
  feedFilters: Signal<CvcActivityFeedFilters>
  originatingUserId: WritableSignal<number | null>
  organizationId: WritableSignal<number | null>
  eventType: WritableSignal<EventAction | null>
  subject: WritableSignal<SubscribableQueryInput | null>

  feedInfo: WritableSignal<Maybe<CvcActivityFeedInfo>>

  settingsOptions = cvcActivityFeedSettingsOptions

  constructor() {
    // SETTINGS
    this.includeAutomatedEvents = signal(
      cvcActivityFeedSettingsDefaults.includeAutomatedEvents
    )
    this.feedSettings = computed(() => ({
      pageSize: this.pageSize(),
      includeAutomatedEvents: this.includeAutomatedEvents(),
    }))

    // FILTERS
    this.originatingUserId = signal(null)
    this.organizationId = signal(null)
    this.eventType = signal(null)
    this.pageSize = signal(cvcActivityFeedSettingsDefaults.pageSize)
    this.subject = signal(null)
    this.feedFilters = computed(() => {
      return {
        originatingUserId: this.originatingUserId() ?? undefined,
        organizationId: this.organizationId() ?? undefined,
        eventType: this.eventType() ?? undefined,
        subject: this.subject() ?? undefined,
      }
    })

    // INFO
    this.feedInfo = signal({
      loading: false,
      actionCount: { unfiltered: 999 },
      participants: [],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcSubject) {
      this.subject.set(changes.cvcSubject.currentValue)
    }
  }
}
