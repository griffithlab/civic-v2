import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  WritableSignal,
  effect,
  input,
  signal,
} from '@angular/core'
import {
  ActivityFeedFilters,
  ActivityFeedFilterOptions,
  ActivityFeedScope,
} from '../activity-feed.types'
import {
  ActivitySubjectInput,
  ActivityTypeInput,
  Maybe,
} from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { disableDates } from '../activity-feed.functions'

export const defaultFilters = {}

@Component({
  selector: 'cvc-activity-feed-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    CvcPipesModule,
  ],
  templateUrl: './feed-filters.component.html',
  styleUrl: './feed-filters.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedFilterSelects implements OnInit {
  @Output() cvcFiltersChange: EventEmitter<ActivityFeedFilters>
  cvcFilters = input.required<ActivityFeedFilters>()
  cvcFilterOptions = input.required<ActivityFeedFilterOptions>()
  cvcScope = input.required<ActivityFeedScope>()

  eventType!: WritableSignal<ActivityTypeInput[]>
  organizationId!: WritableSignal<number[]>
  subjectType!: WritableSignal<ActivitySubjectInput[]>
  userId!: WritableSignal<number[]>
  occurredAfter!: WritableSignal<Date | null>
  occurredBefore!: WritableSignal<Date | null>

  disableDates: { [key: string]: (current: Date) => boolean }
  constructor() {
    this.cvcFiltersChange = new EventEmitter<ActivityFeedFilters>()
    this.disableDates = disableDates

    effect(() => {
      this.cvcFiltersChange.emit({
        activityType: this.eventType(),
        organizationId: this.organizationId(),
        subjectType: this.subjectType(),
        userId: this.userId(),
        occurredAfter: this.occurredAfter(),
        occurredBefore: this.occurredBefore(),
      })
    })
  }
  ngOnInit(): void {
    this.eventType = signal(this.cvcFilters().activityType)
    this.subjectType = signal(this.cvcFilters().subjectType)
    this.organizationId = signal(this.cvcFilters().organizationId)
    this.userId = signal(this.cvcFilters().userId)
    this.occurredAfter = signal(this.cvcFilters().occurredAfter)
    this.occurredBefore = signal(this.cvcFilters().occurredBefore)
  }
}
