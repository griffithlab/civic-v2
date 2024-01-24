import { CommonModule } from '@angular/common'
import { Component, WritableSignal, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'

@Component({
  selector: 'cvc-activity-feed-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzPopoverModule,
    NzSelectModule,
  ],
  templateUrl: './activity-feed-settings.component.html',
  styleUrl: './activity-feed-settings.component.less',
})
export class CvcActivityFeedSettings {
  includeAutomatedEvents: WritableSignal<boolean>
  pageSize: WritableSignal<number>
  pageSizes = [5, 10, 25, 50, 100]

  constructor() {
    this.includeAutomatedEvents = signal(false)
    this.pageSize = signal(10)
  }
}
