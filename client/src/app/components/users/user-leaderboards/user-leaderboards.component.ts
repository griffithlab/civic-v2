import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  LeaderboardUser,
  LeaderboardUserEdge,
  LeaderboardUserFieldsFragment,
  TimeWindow,
  UserLeaderboardsGQL,
  UserLeaderboardsQuery,
  UserLeaderboardsQueryVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, map, filter } from 'rxjs'
import { isNonNulled, isNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { TagLinkableUser } from '../user-tag/user-tag.component'

@UntilDestroy()
@Component({
  selector: 'cvc-user-leaderboards',
  templateUrl: './user-leaderboards.component.html',
  styleUrls: ['./user-leaderboards.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcUserLeaderboardsComponent implements OnInit {
  // SOURCE STREAMS
  timeWindow$: BehaviorSubject<TimeWindow>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<UserLeaderboardsQuery, UserLeaderboardsQueryVariables>
  result$!: Observable<ApolloQueryResult<UserLeaderboardsQuery>>

  // PRESENTATION STREAMS
  commentsLeaderboard$!: Observable<TagLinkableUser[]>
  revisionsLeaderboard$!: Observable<TagLinkableUser[]>
  moderationsLeaderboard$!: Observable<TagLinkableUser[]>
  submissionsLeaderboard$!: Observable<TagLinkableUser[]>

  boardLength: number = 5
  initialWindow: TimeWindow = TimeWindow.AllTime

  constructor(private gql: UserLeaderboardsGQL) {
    this.timeWindow$ = new BehaviorSubject<TimeWindow>(this.initialWindow)
    this.timeWindow$.pipe(untilDestroyed(this)).subscribe((window) => {
      this.queryRef.refetch({ window: window })
    })
  }

  ngOnInit(): void {
    this.queryRef = this.gql.watch({
      first: this.boardLength,
      window: this.initialWindow,
    })

    this.result$ = this.queryRef.valueChanges

    const lbUsersToTlUsers = (
      lbUser: LeaderboardUserFieldsFragment[]
    ): TagLinkableUser[] => {
      return lbUser.map((lbUser) => {
        return {
          id: lbUser.id,
          displayName: lbUser.displayName,
          role: lbUser.role,
        }
      })
    }

    this.commentsLeaderboard$ = this.result$.pipe(
      pluck('data', 'userCommentsLeaderboard', 'nodes'),
      filter(isNonNulled),
      map((lbUsers) => lbUsersToTlUsers(lbUsers)),
      tag('commentsLeaderboard$')
    )

    this.revisionsLeaderboard$ = this.result$.pipe(
      pluck('data', 'userRevisionsLeaderboard', 'nodes'),
      filter(isNonNulled),
      map((lbUsers) => lbUsersToTlUsers(lbUsers)),
      tag('commentsLeaderboard$')
    )

    this.moderationsLeaderboard$ = this.result$.pipe(
      pluck('data', 'userModerationLeaderboard', 'nodes'),
      filter(isNonNulled),
      map((lbUsers) => lbUsersToTlUsers(lbUsers)),
      tag('commentsLeaderboard$')
    )

    this.submissionsLeaderboard$ = this.result$.pipe(
      pluck('data', 'userSubmissionsLeaderboard', 'nodes'),
      filter(isNonNulled),
      map((lbUsers) => lbUsersToTlUsers(lbUsers)),
      tag('commentsLeaderboard$')
    )
  }
}
