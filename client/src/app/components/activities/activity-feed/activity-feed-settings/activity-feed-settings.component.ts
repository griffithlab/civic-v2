import { CommonModule } from '@angular/common'
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Signal,
  WritableSignal,
  computed,
  effect,
  input,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { ActivityFeedSettings } from '../activity-feed.types'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { feedDefaultSettings, pageSizeOptions } from '../activity-feed.config'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-activity-feed-settings',
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
})
export class CvcActivityFeedSettingsButton implements OnInit {
  @Output() cvcSettingsChange: EventEmitter<ActivityFeedSettings>
  cvcSettings = input.required<ActivityFeedSettings>()

  pageSize!: WritableSignal<number>

  pageSizes = pageSizeOptions
  constructor() {
    this.cvcSettingsChange = new EventEmitter<ActivityFeedSettings>()

    effect(() => {
      this.cvcSettingsChange.emit({
        pageSize: this.pageSize(),
      })
    })
  }
  ngOnInit(): void {
    this.pageSize = signal(this.cvcSettings().pageSize)
  }
}
