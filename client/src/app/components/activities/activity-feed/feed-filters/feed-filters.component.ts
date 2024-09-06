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
  dateRange!: WritableSignal<[Maybe<Date>, Maybe<Date>]>

  constructor() {
    this.cvcFiltersChange = new EventEmitter<ActivityFeedFilters>()

    effect(() => {
      this.cvcFiltersChange.emit({
        activityType: this.eventType(),
        organizationId: this.organizationId(),
        subjectType: this.subjectType(),
        userId: this.userId(),
        dateRange: this.dateRange(),
      })
    })
  }
  ngOnInit(): void {
    this.eventType = signal(this.cvcFilters().activityType)
    this.organizationId = signal(this.cvcFilters().organizationId)
    this.subjectType = signal(this.cvcFilters().subjectType)
    this.userId = signal(this.cvcFilters().userId)
  }
}
