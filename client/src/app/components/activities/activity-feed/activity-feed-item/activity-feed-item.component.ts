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
  ActivityFeedFieldsFragment,
  ActivityFeedItemGQL,
  ActivityFeedItemQuery,
  ActivityFeedItemQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { PushPipe } from '@ngrx/component'
import { Apollo, QueryRef, gql } from 'apollo-angular'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { Observable, Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'

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
  toggleDetail$: Subject<void>

  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>

  loading: WritableSignal<boolean>
  activity: WritableSignal<Maybe<ActivityFeedFieldsFragment>>

  showDetails: WritableSignal<boolean>
  constructor(private gql: ActivityFeedItemGQL) {
    this.showDetails = signal(false)
    this.toggleDetail$ = new Subject<void>()
    this.toggleDetail$.pipe(untilDestroyed(this)).subscribe(() => {
      this.showDetails.set(!this.showDetails())
    })
    this.loading = signal(false)
    this.activity = signal(undefined)
    effect(() => {
      if (this.showDetails()) {
        this.fetchDetails()
      }
    })
  }

  ngOnInit(): void {
    this.activity.set(this.cvcActivity())
  }

  fetchDetails(): void {
    if (!this.queryRef) {
      this.queryRef = this.gql.watch({
        id: this.cvcActivity().id,
        requestDetails: true,
      })
      this.result$ = this.queryRef.valueChanges
      this.result$.pipe(untilDestroyed(this)).subscribe((result) => {
        this.loading.set(result.loading)
        if (result.data.activity) {
          this.activity.update((previous) => {
            if (previous) {
              return {
                ...previous,
                ...result.data.activity,
              }
            } else {
              return result.data.activity
            }
          })
        }
      })
    } else {
      this.queryRef.refetch({
        id: this.cvcActivity().id,
        requestDetails: true,
      })
    }
  }
}
