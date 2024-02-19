import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  input,
  effect,
  OnInit,
  computed,
  Signal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ApolloClient, ApolloQueryResult } from '@apollo/client/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  ActivityFeedFieldsFragment,
  ActivityFeedItemGQL,
  ActivityFeedItemQuery,
  ActivityFeedItemQueryVariables,
  ActivityInterface,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { PushPipe } from '@ngrx/component'
import { Apollo, QueryRef } from 'apollo-angular'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  filter,
  map,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'

type ItemViewModel = {
  loading: boolean
  activity?: any
}
@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed-item',
  standalone: true,
  imports: [
    CommonModule,
    PushPipe,
    NzIconModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    CvcPipesModule,
  ],
  templateUrl: './activity-feed-item.component.html',
  styleUrl: './activity-feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedItem implements OnInit {
  cvcActivity = input.required<ActivityFeedFieldsFragment>()
  cacheId: Signal<Maybe<string>>
  toggleDetail$: Subject<void>

  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>

  loading?: Signal<boolean>
  activity?: Signal<ActivityFeedFieldsFragment>

  vm?: Signal<ItemViewModel>

  showDetails: WritableSignal<boolean>
  constructor(private apollo: Apollo, private gql: ActivityFeedItemGQL) {
    this.cacheId = computed(() =>
      apollo.client.cache.identify(this.cvcActivity())
    )
    this.showDetails = signal(false)
    this.toggleDetail$ = new Subject<void>()
    this.toggleDetail$.pipe(untilDestroyed(this)).subscribe(() => {
      this.showDetails.set(!this.showDetails())
    })
    effect(() => {
      if (this.showDetails()) {
        if (!this.queryRef) {
          this.watchQuery()
        }
      }
    })
  }

  ngOnInit(): void {
    // this.vm = signal({ loading: false, activity: this.cvcActivity() })
    // this.queryRef = this.gql.watch({ id: this.cvcActivity().id })
    // this.result = toSignal(
    //   this.queryRef.valueChanges.pipe(tag('item valueChanges')),
    //   { requireSync: true }
    // )
  }

  watchQuery(): void {
    this.queryRef = this.gql.watch({
      id: this.cvcActivity().id,
      requestDetails: true,
    })
    this.result$ = this.queryRef.valueChanges.pipe(tag('item valueChanges'))
    this.loading = toSignal(this.result$.pipe(pluck('loading')), {
      requireSync: true,
    })
    this.activity = toSignal(
      this.result$.pipe(pluck('data', 'activity'), filter(isNonNulled)),
      {
        requireSync: true,
      }
    )
  }
}

// this.vm = computed(() => {
//   // if we don't have a result yet, return input's activity data
//   if (!this.result) {
//     return {
//       // if queryRef exists, request has been sent so set loading to true
//       loading: this.queryRef ? true : false,
//       activity: this.cvcActivity(),
//     }
//   } else {
//     return {
//       loading: this.result()?.loading ?? false,
//       activity: this.result()?.data.activity ?? this.cvcActivity(),
//     }
//   }
// })
