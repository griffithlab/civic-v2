import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'

export type CvcActivityFeedSettingsOptions = {
  pageSizes: number[]
  includeAutomatedEvents: boolean
}

@Component({
  selector: 'cvc-activity-feed-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
export class CvcActivityFeedSettings {
  @Input() cvcFeedSettingsOptions: CvcActivityFeedSettingsOptions

  optionsDefaults: CvcActivityFeedSettingsOptions = {
    pageSizes: [5, 10, 25, 50, 100],
    includeAutomatedEvents: false,
  }

  includeAutomatedEvents: WritableSignal<boolean> = signal(false)
  pageSize: WritableSignal<number>
  pageSizes = [5, 10, 25, 50, 100]

  constructor() {
    this.cvcFeedSettingsOptions = this.optionsDefaults
    this.includeAutomatedEvents = signal(false)
    this.pageSize = signal(10)
  }
}
