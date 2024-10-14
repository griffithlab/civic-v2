import {
  ChangeDetectionStrategy,
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
import { trigger, transition, style, animate } from '@angular/animations'
import {
  ActivityFeedFilters,
  ActivityFeedFilterOptions,
  ActivityFeedScope,
  ActivityFeedSettings,
  FeedQueryRefetchEvent,
} from '../activity-feed.types'
import {
  ActivityFeedUpdatesGQL,
  ActivitySubjectInput,
  ActivityTypeInput,
  DateSort,
  DateSortColumns,
  Maybe,
  SortDirection,
} from '@app/generated/civic.apollo'
import { CommonModule, KeyValuePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { disableDates } from '../activity-feed.functions'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { tag } from 'rxjs-spy/operators'
import { distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators'
import { timer, filter, of } from 'rxjs'
import { isNonNullObject } from '@apollo/client/utilities'
import { isNonNulled } from 'rxjs-etc'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzAlertModule } from 'ng-zorro-antd/alert'

export const defaultFilters = {}

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    KeyValuePipe,
    NzAlertModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    CvcPipesModule,
  ],
  templateUrl: './feed-filters.component.html',
  styleUrls: ['./feed-filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('refreshAlertAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('250ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('250ms ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class CvcActivityFeedFilterSelects implements OnInit {
  @Output() cvcFiltersChange: EventEmitter<ActivityFeedFilters>
  cvcFilters = input.required<ActivityFeedFilters>()
  cvcRefreshChanges = input.required<FeedQueryRefetchEvent>()
  cvcFilterOptions = input.required<ActivityFeedFilterOptions>()
  cvcScope = input.required<ActivityFeedScope>()
  cvcCheckInterval = input<number>(0)

  eventType!: WritableSignal<ActivityTypeInput[]>
  organizationId!: WritableSignal<number[]>
  subjectType!: WritableSignal<ActivitySubjectInput[]>
  userId!: WritableSignal<number[]>
  occurredAfter!: WritableSignal<Date | null>
  occurredBefore!: WritableSignal<Date | null>
  disableDates: { [key: string]: (current: Date) => boolean }
  sortByColumn!: WritableSignal<DateSortColumns>
  sortByDirection!: WritableSignal<SortDirection>
  newActivities: Signal<number>

  constructor(private gql: ActivityFeedUpdatesGQL) {
    this.cvcFiltersChange = new EventEmitter<ActivityFeedFilters>()
    this.disableDates = disableDates // used by nz-date-picker inputs
    this.newActivities = signal(0)

    effect(() => {
      this.cvcFiltersChange.emit({
        activityType: this.eventType(),
        organizationId: this.organizationId(),
        subjectType: this.subjectType(),
        userId: this.userId(),
        occurredAfter: this.occurredAfter(),
        occurredBefore: this.occurredBefore(),
        sortByColumn: this.sortByColumn(),
        sortByDirection: this.sortByDirection(),
      })
    })

    const newActivities$ = toObservable(this.cvcRefreshChanges).pipe(
      filter(isNonNulled),
      switchMap((refetchEvent) => {
        const now = new Date()
        const interval = this.cvcCheckInterval() * 1000
        if (interval > 0) {
          // check for new activities every interval seconds,
          // starting after interval seconds
          return timer(interval, interval).pipe(
            startWith(0),
            switchMap(() => {
              return this.gql
                .fetch(
                  {
                    ...refetchEvent.query,
                    occurredAfter: now,
                  },
                  { fetchPolicy: 'no-cache' }
                )
                .pipe(
                  map((result) => result.data?.activities?.totalCount ?? 0),
                  distinctUntilChanged()
                )
            })
          )
        } else {
          return of(0)
        }
      })
    )
    this.newActivities = toSignal(newActivities$, { initialValue: 0 })
  }
  ngOnInit(): void {
    this.eventType = signal(this.cvcFilters().activityType)
    this.subjectType = signal(this.cvcFilters().subjectType)
    this.organizationId = signal(this.cvcFilters().organizationId)
    this.userId = signal(this.cvcFilters().userId)
    this.occurredAfter = signal(this.cvcFilters().occurredAfter)
    this.occurredBefore = signal(this.cvcFilters().occurredBefore)
    this.sortByColumn = signal(this.cvcFilters().sortByColumn)
    this.sortByDirection = signal(this.cvcFilters().sortByDirection)
  }
}
