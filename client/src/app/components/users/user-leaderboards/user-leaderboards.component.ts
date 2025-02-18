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
  UserSubmissionsLeaderboardGQL,
  UserSubmissionsLeaderboardQuery,
  UserSubmissionsLeaderboardQueryVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { WatchQueryOptionsAlone } from 'apollo-angular/types'
import { BehaviorSubject, map } from 'rxjs'
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
  standalone: false,
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
  submissionsQueryRef!: QueryRef<
    UserSubmissionsLeaderboardQuery,
    UserSubmissionsLeaderboardQueryVariables
  >

  // PRESENTATION STREAMS
  commentsView$: BehaviorSubject<UserLeaderboard>
  revisionsView$: BehaviorSubject<UserLeaderboard>
  moderationView$: BehaviorSubject<UserLeaderboard>
  submissionsView$: BehaviorSubject<UserLeaderboard>

  initialCommentsView: UserLeaderboard = {
    title: 'Comments Leaderboard',
    info: 'Contributors ranked by the total number of posted Comments.',
    loading: false,
    rows: [],
  }

  initialRevisionsView: UserLeaderboard = {
    title: 'Revisions Leaderboard',
    info: 'Contributors ranked by the total number of Revisions they have suggested.',
    loading: false,
    rows: [],
  }

  initialModerationView: UserLeaderboard = {
    title: 'Moderation Leaderboard',
    info: 'Contributors ranked by the total number of editorial actions they have taken. This includes accepting and rejecting Revisions, Evidence, and Assertions.',
    loading: false,
    rows: [],
  }

  initialSubmissionsView: UserLeaderboard = {
    title: 'Submissions Leaderboard',
    info: 'Contributors ranked by the total number of submitted Evidence Items and Assertions.',
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
    private moderationGQL: UserModerationLeaderboardGQL,
    private submissionsGQL: UserSubmissionsLeaderboardGQL
  ) {
    this.timeWindow$ = new BehaviorSubject<TimeWindow>(this.initialWindow)
    this.timeWindow$.pipe(untilDestroyed(this)).subscribe((window) => {
      this.commentsQueryRef.refetch({ window: window })
      this.revisionsQueryRef.refetch({ window: window })
      this.moderationQueryRef.refetch({ window: window })
      this.submissionsQueryRef.refetch({ window: window })
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
    this.submissionsView$ = new BehaviorSubject<UserLeaderboard>(
      this.initialSubmissionsView
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
          if (result.data && result.data.userLeaderboards) {
            result.data.userLeaderboards.commentsLeaderboard.edges.map((e) => {
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
          if (result.data && result.data.userLeaderboards) {
            result.data.userLeaderboards.moderationLeaderboard.edges.map(
              (e) => {
                if (e.node) {
                  const row = userToUserRow(e.node)
                  rows.push(row)
                }
              }
            )
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
          if (result.data && result.data.userLeaderboards) {
            result.data.userLeaderboards.revisionsLeaderboard.edges.map((e) => {
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

    /*
     * SUBMISSIONS VIEW
     */
    this.submissionsQueryRef = this.submissionsGQL.watch(
      {
        first: this.initialRows,
        window: this.initialWindow,
      },
      this.fetchPolicy
    )

    this.submissionsQueryRef.valueChanges
      .pipe(
        map((result: ApolloQueryResult<UserSubmissionsLeaderboardQuery>) => {
          let rows: UserLeaderboardRow[] = []
          if (result.data && result.data.userLeaderboards) {
            result.data.userLeaderboards.submissionsLeaderboard.edges.map(
              (e) => {
                if (e.node) {
                  const row = userToUserRow(e.node)
                  rows.push(row)
                }
              }
            )
          }

          return <UserLeaderboard>{
            title: this.initialSubmissionsView.title,
            info: this.initialSubmissionsView.info,
            loading: result.loading,
            rows: [...rows],
          }
        }),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.submissionsView$.next(leaderboard))
  }
}
