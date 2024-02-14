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
import { ActivityFeedFilters } from '../activity-feed.types'
import {
  EventAction,
  SubscribableQueryInput,
} from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'

export const defaultFilters = {}

@Component({
  selector: 'cvc-activity-feed-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-feed-filters.component.html',
  styleUrl: './activity-feed-filters.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedFilterSelects implements OnInit {
  @Output() cvcFiltersChange: EventEmitter<ActivityFeedFilters>
  cvcFilters = input.required<ActivityFeedFilters>()
  cvcShowFilters = input.required<boolean>()

  eventType!: WritableSignal<EventAction[]>
  organizationId!: WritableSignal<number[]>
  subjectType!: WritableSignal<SubscribableQueryInput[]>
  userId!: WritableSignal<number[]>

  constructor() {
    this.cvcFiltersChange = new EventEmitter<ActivityFeedFilters>()

    effect(() => {
      this.cvcFiltersChange.emit({
        eventType: this.eventType(),
        organizationId: this.organizationId(),
        subjectType: this.subjectType(),
        userId: this.userId(),
      })
    })
  }
  ngOnInit(): void {
    this.eventType = signal(this.cvcFilters().eventType)
    this.organizationId = signal(this.cvcFilters().organizationId)
    this.subjectType = signal(this.cvcFilters().subjectType)
    this.userId = signal(this.cvcFilters().userId)
  }
}
