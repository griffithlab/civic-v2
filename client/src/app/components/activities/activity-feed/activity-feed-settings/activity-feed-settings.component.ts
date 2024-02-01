import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { CvcActivityFeedSettings } from '../activity-feed.types'

export type CvcActivityFeedSettingsOptions = {
  pageSizes: number[]
}

export const cvcActivityFeedSettingsDefaults = {
  pageSize: 25,
  includeAutomatedEvents: false,
}

@Component({
  selector: 'cvc-activity-feed-settings-button',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzGridModule,
    NzPopoverModule,
    NzSelectModule,
  ],
  templateUrl: './activity-feed-settings.component.html',
  styleUrl: './activity-feed-settings.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedSettingsButton {
  @Output() cvcFeedSettingsChange: EventEmitter<CvcActivityFeedSettings>

  feedSettings: Signal<CvcActivityFeedSettings>
  optionsDefaults: CvcActivityFeedSettingsOptions = {
    pageSizes: [5, 10, 25, 50, 100],
  }

  includeAutomatedEvents: WritableSignal<boolean> = signal(false)
  pageSize: WritableSignal<number>

  constructor() {
    this.includeAutomatedEvents = signal(
      cvcActivityFeedSettingsDefaults.includeAutomatedEvents
    )
    this.pageSize = signal(cvcActivityFeedSettingsDefaults.pageSize)
    this.feedSettings = computed(() => ({
      pageSize: this.pageSize(),
      includeAutomatedEvents: this.includeAutomatedEvents(),
    }))

    // Outputs
    this.cvcFeedSettingsChange = new EventEmitter<CvcActivityFeedSettings>()
    effect(() => {
      this.cvcFeedSettingsChange.emit({
        pageSize: this.pageSize(),
        includeAutomatedEvents: this.includeAutomatedEvents(),
      })
    })
  }
}
