import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Signal,
  WritableSignal,
  effect,
  input,
  signal,
} from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'
import {
  ActivityFeedFilters,
  ActivityFeedFilterOptions,
  ActivityFeedScope,
  FeedQueryRefetchEvent,
} from '../activity-feed.types'
import {
  ActivityFeedUpdatesGQL,
  ActivitySubjectInput,
  ActivityTypeInput,
  DateSortColumns,
  SortDirection,
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
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { tag } from 'rxjs-spy/operators'
import {
  distinctUntilChanged,
  map,
  skip,
  startWith,
  switchMap,
} from 'rxjs/operators'
import { timer, filter, of, Subject, from } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcUserFilterSelect } from './user-filter-select/user-filter-select.component'
import { CvcOrgFilterSelect } from './org-filter-select/org-filter-select.component'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'

export const defaultFilters = {}

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed-filters',
  imports: [
    CommonModule,
    FormsModule,
    NzAlertModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    NzCheckboxModule,
    CvcPipesModule,
    CvcUserFilterSelect,
    CvcOrgFilterSelect,
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
  includeSubgroups!: WritableSignal<boolean>
  subjectType!: WritableSignal<ActivitySubjectInput[]>
  userId!: WritableSignal<number[]>
  linkedEndorsementId!: WritableSignal<number | null>
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
        includeSubgroups: this.includeSubgroups(),
        subjectType: this.subjectType(),
        userId: this.userId(),
        linkedEndorsementId: this.linkedEndorsementId(),
        occurredAfter: this.occurredAfter(),
        occurredBefore: this.occurredBefore(),
        sortByColumn: this.sortByColumn(),
        sortByDirection: this.sortByDirection(),
      })
    })
    /**
     * Observable that emits the count of new activities since the last refresh.
     *
     * Behavior:
     * - Only activates if cvcCheckInterval > 0, else emits 0
     * - Polls the API at the specified interval (cvcCheckInterval in seconds)
     * - Uses the current filter settings but only looks for activities after the last refresh
     * - Emits 0 initially and then the count of new activities
     * - Only emits when the count changes (uses distinctUntilChanged)
     * - Resets to 0 when filters change via cvcRefreshChanges
     */
    const newActivities$ = toObservable(this.cvcRefreshChanges).pipe(
      filter(isNonNulled),
      switchMap((refetchEvent) => {
        const now = new Date()
        const interval = this.cvcCheckInterval() * 1000
        if (interval > 0) {
          // check for new activities every interval seconds,
          // starting after interval seconds
          return timer(interval, interval).pipe(
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
            }),
            startWith(0)
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
    this.includeSubgroups = signal(this.cvcFilters().includeSubgroups)
    this.userId = signal(this.cvcFilters().userId)
    this.linkedEndorsementId = signal(this.cvcFilters().linkedEndorsementId)
    this.occurredAfter = signal(this.cvcFilters().occurredAfter)
    this.occurredBefore = signal(this.cvcFilters().occurredBefore)
    this.sortByColumn = signal(this.cvcFilters().sortByColumn)
    this.sortByDirection = signal(this.cvcFilters().sortByDirection)
  }
}
