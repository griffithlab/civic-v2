import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  LeaderboardUserFieldsFragment,
  Maybe,
  TimeWindow,
  UserCommentsLeaderboardGQL,
  UserCommentsLeaderboardQuery,
  UserCommentsLeaderboardQueryVariables,
  UserModerationLeaderboardGQL,
  UserModerationLeaderboardQuery,
  UserModerationLeaderboardQueryVariables,
  UserRevisionsLeaderboardGQL,
  UserRevisionsLeaderboardQuery,
  UserRevisionsLeaderboardQueryVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { WatchQueryOptionsAlone } from 'apollo-angular/types'
import { BehaviorSubject, map } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { TagLinkableUser } from '../user-tag/user-tag.component'

type UserLeaderboardRow = {
  user: TagLinkableUser
  name: Maybe<string>
  rank: number
  actionCount: number
  profileImagePath: Maybe<string>
}

type UserLeaderboard = {
  title: string
  info: string
  loading: boolean
  rows: Maybe<UserLeaderboardRow>[]
}

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
  commentsQueryRef!: QueryRef<
    UserCommentsLeaderboardQuery,
    UserCommentsLeaderboardQueryVariables
  >
  revisionsQueryRef!: QueryRef<
    UserRevisionsLeaderboardQuery,
    UserRevisionsLeaderboardQueryVariables
  >
  moderationQueryRef!: QueryRef<
    UserModerationLeaderboardQuery,
    UserModerationLeaderboardQueryVariables
  >

  // PRESENTATION STREAMS
  commentsView$: BehaviorSubject<UserLeaderboard>
  revisionsView$: BehaviorSubject<UserLeaderboard>
  moderationView$: BehaviorSubject<UserLeaderboard>

  initialCommentsView: UserLeaderboard = {
    title: 'Comments Leaderboard',
    info: 'Contributor rank determined by adding total comments made by the contributor.',
    loading: false,
    rows: [],
  }

  initialRevisionsView: UserLeaderboard = {
    title: 'Revisions Leaderboard',
    info: 'Contributor rank determined by ...',
    loading: false,
    rows: [],
  }

  initialModerationView: UserLeaderboard = {
    title: 'Moderation Leaderboard',
    info: 'Contributor rank determined by ...',
    loading: false,
    rows: [],
  }

  initialRows: number = 25
  initialWindow: TimeWindow = TimeWindow.AllTime

  fetchPolicy: WatchQueryOptionsAlone = {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  }

  constructor(
    private commentsGQL: UserCommentsLeaderboardGQL,
    private revisionsGQL: UserRevisionsLeaderboardGQL,
    private moderationGQL: UserModerationLeaderboardGQL
  ) {
    this.timeWindow$ = new BehaviorSubject<TimeWindow>(this.initialWindow)
    this.timeWindow$.pipe(untilDestroyed(this)).subscribe((window) => {
      this.commentsQueryRef.refetch({ window: window })
      this.revisionsQueryRef.refetch({ window: window })
      this.moderationQueryRef.refetch({ window: window })
    })
    this.commentsView$ = new BehaviorSubject<UserLeaderboard>(
      this.initialCommentsView
    )
    this.revisionsView$ = new BehaviorSubject<UserLeaderboard>(
      this.initialRevisionsView
    )
    this.moderationView$ = new BehaviorSubject<UserLeaderboard>(
      this.initialModerationView
    )
  }

  ngOnInit(): void {
    const userToUserRow = (
      lbUser: LeaderboardUserFieldsFragment
    ): UserLeaderboardRow => {
      return {
        rank: lbUser.rank,
        actionCount: lbUser.actionCount,
        profileImagePath: lbUser.profileImagePath,
        name: lbUser.name,
        user: {
          id: lbUser.id,
          displayName: lbUser.displayName,
          role: lbUser.role,
        },
      }
    }

    /*
     * COMMENTS VIEW
     */
    this.commentsQueryRef = this.commentsGQL.watch(
      {
        first: this.initialRows,
        window: this.initialWindow,
      },
      this.fetchPolicy
    )

    this.commentsQueryRef.valueChanges
      .pipe(
        map((result: ApolloQueryResult<UserCommentsLeaderboardQuery>) => {
          let rows: UserLeaderboardRow[] = []
          if (result.data && result.data.userCommentsLeaderboard) {
            result.data.userCommentsLeaderboard.edges.map((e) => {
              if (e.node) {
                const row = userToUserRow(e.node)
                rows.push(row)
              }
            })
          }

          return <UserLeaderboard>{
            title: this.initialCommentsView.title,
            info: this.initialCommentsView.info,
            loading: result.loading,
            rows: [...rows],
          }
        }),
        // tag('comments valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.commentsView$.next(leaderboard))

    /*
     * MODERATION VIEW
     */
    this.moderationQueryRef = this.moderationGQL.watch(
      {
        first: this.initialRows,
        window: this.initialWindow,
      },
      this.fetchPolicy
    )

    this.moderationQueryRef.valueChanges
      .pipe(
        map((result: ApolloQueryResult<UserModerationLeaderboardQuery>) => {
          let rows: UserLeaderboardRow[] = []
          if (result.data && result.data.userModerationLeaderboard) {
            result.data.userModerationLeaderboard.edges.map((e) => {
              if (e.node) {
                const row = userToUserRow(e.node)
                rows.push(row)
              }
            })
          }

          return <UserLeaderboard>{
            title: this.initialModerationView.title,
            info: this.initialModerationView.info,
            loading: result.loading,
            rows: [...rows],
          }
        }),
        // tag('moderation valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.moderationView$.next(leaderboard))

    /*
     * REVISIONS VIEW
     */
    this.revisionsQueryRef = this.revisionsGQL.watch(
      {
        first: this.initialRows,
        window: this.initialWindow,
      },
      this.fetchPolicy
    )

    this.revisionsQueryRef.valueChanges
      .pipe(
        map((result: ApolloQueryResult<UserRevisionsLeaderboardQuery>) => {
          let rows: UserLeaderboardRow[] = []
          if (result.data && result.data.userRevisionsLeaderboard) {
            result.data.userRevisionsLeaderboard.edges.map((e) => {
              if (e.node) {
                const row = userToUserRow(e.node)
                rows.push(row)
              }
            })
          }

          return <UserLeaderboard>{
            title: this.initialRevisionsView.title,
            info: this.initialRevisionsView.info,
            loading: result.loading,
            rows: [...rows],
          }
        }),
        // tag('revisions valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.revisionsView$.next(leaderboard))
  }
}
