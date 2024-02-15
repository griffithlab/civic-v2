import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  input,
  effect,
  OnInit,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  ActivityFeedItemFieldsFragment,
  ActivityFeedItemGQL,
  ActivityFeedItemQuery,
  ActivityFeedItemQueryVariables,
  ActivityFeedNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { PushPipe } from '@ngrx/component'
import { QueryRef } from 'apollo-angular'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs'
import { pluck } from 'rxjs-etc/dist/esm/operators'

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
  cvcActivity = input.required<ActivityFeedNodeFragment>()

  queryActivity$: Subject<ActivityFeedItemQueryVariables>
  queryResult$: Observable<ApolloQueryResult<ActivityFeedItemQuery>>
  loading$: Observable<boolean>
  activityDetail$: Observable<Maybe<ActivityFeedItemFieldsFragment>>
  toggleDetail$: Subject<void>

  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  showDetails: WritableSignal<boolean>

  constructor(private gql: ActivityFeedItemGQL) {
    this.queryActivity$ = new Subject<ActivityFeedItemQueryVariables>()
    this.loading$ = new Observable<boolean>()
    this.activityDetail$ = new Observable<
      Maybe<ActivityFeedItemFieldsFragment>
    >()
    this.queryResult$ = new Observable<
      ApolloQueryResult<ActivityFeedItemQuery>
    >()
    this.toggleDetail$ = new Subject<void>()
    this.showDetails = signal(false)

    this.toggleDetail$.pipe(untilDestroyed(this)).subscribe(() => {
      this.showDetails.set(!this.showDetails())
    })
    effect(() => {
      if (this.showDetails() && this.cvcActivity().id) {
        if (!this.queryRef) {
          this.queryRef = this.gql.watch({ id: this.cvcActivity().id })
          this.queryResult$ = this.queryRef.valueChanges
          this.loading$ = this.queryResult$.pipe(pluck('loading'))
          this.activityDetail$ = this.queryResult$.pipe(
            pluck('data', 'activity')
          )
        }
      }
    })
  }
  ngOnInit(): void {}
}
