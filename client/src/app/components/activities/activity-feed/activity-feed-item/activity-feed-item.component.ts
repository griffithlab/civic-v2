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
  ActivityFeedItemFieldsFragment,
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
import { BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'

type ActivityFeedItemViewModel = {
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
  id: Signal<number>
  typename: Signal<string>
  cacheId: Signal<string>
  toggleDetail$: Subject<void>

  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>
  // vm: Signal<ActivityFeedItemViewModel>

  showDetails: WritableSignal<boolean>
  constructor(private gql: ActivityFeedItemGQL) {
    this.id = computed(() => this.cvcActivity().id)
    this.typename = computed(() => this.cvcActivity().__typename)
    this.cacheId = computed(() => `${this.id()}:${this.typename()}`)
    this.showDetails = signal(false)
    this.toggleDetail$ = new Subject<void>()
    this.toggleDetail$.pipe(untilDestroyed(this)).subscribe(() => {
      this.showDetails.set(!this.showDetails())
    })
    effect(() => {
      if (this.showDetails()) {
        if (!this.queryRef) {
          // send out vm with pa, will be updated when query completes
          // this.vm.set({ loading: false, activity: this.cvcActivity() })
          this.queryRef = this.gql.watch({
            id: this.cvcActivity().id,
            requestDetails: true,
          })
          this.result$ = this.queryRef.valueChanges.pipe(
            tag('item valueChanges')
          )
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
