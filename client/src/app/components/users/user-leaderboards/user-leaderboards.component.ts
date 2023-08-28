import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  LeaderboardUser,
  LeaderboardUserEdge,
  LeaderboardUserFieldsFragment,
  Maybe,
  TimeWindow,
  UserCommentsLeaderboardGQL,
  UserCommentsLeaderboardQuery,
  UserCommentsLeaderboardQueryVariables,
  UserLeaderboardsGQL,
  UserLeaderboardsQuery,
  UserLeaderboardsQueryVariables,
  UserModerationLeaderboardGQL,
  UserModerationLeaderboardQuery,
  UserModerationLeaderboardQueryVariables,
  UserRevisionsLeaderboardGQL,
  UserRevisionsLeaderboardQuery,
  UserRevisionsLeaderboardQueryVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import {
  BehaviorSubject,
  Observable,
  map,
  filter,
  distinctUntilChanged,
} from 'rxjs'
import { isNonNulled, isNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
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
  id: 'userComments' | 'userRevisions' | 'userModeration'
  title: string
  loading: boolean
  rows: Maybe<UserLeaderboardRow>[]
}

type UserLeaderboardView = {
  window: TimeWindow
  leaderboards: UserLeaderboard[]
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

  commentsResult$!: Observable<ApolloQueryResult<UserCommentsLeaderboardQuery>>
  commentsLoading$!: Observable<Boolean>

  revisionsResult$!: Observable<
    ApolloQueryResult<UserRevisionsLeaderboardQuery>
  >
  revisionsLoading$!: Observable<Boolean>

  moderationResult$!: Observable<
    ApolloQueryResult<UserModerationLeaderboardQuery>
  >
  moderationLoading$!: Observable<Boolean>

  // PRESENTATION STREAMS
  leaderboardsView$!: Observable<UserLeaderboardView>

  initialRows: number = 10
  initialWindow: TimeWindow = TimeWindow.AllTime

  initialView: UserLeaderboardView = {
    window: this.initialWindow,
    leaderboards: [
      {
        id: 'userComments',
        title: 'Comments Made',
        loading: false,
        rows: [],
      },
      {
        id: 'userModeration',
        title: 'Moderations Performed',
        loading: false,
        rows: [],
      },
      {
        id: 'userRevisions',
        title: 'Revisions Made',
        loading: false,
        rows: [],
      },
    ],
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
  }

  ngOnInit(): void {
    this.commentsQueryRef = this.commentsGQL.watch({
      first: this.initialRows,
      window: this.initialWindow,
    })

    this.revisionsQueryRef = this.revisionsGQL.watch({
      first: this.initialRows,

      window: this.initialWindow,
    })

    this.moderationQueryRef = this.moderationGQL.watch({
      first: this.initialRows,
      window: this.initialWindow,
    })

    this.commentsResult$ = this.commentsQueryRef.valueChanges.pipe(
      tag('comments valueChange$')
    )
    this.commentsLoading$ = this.commentsResult$.pipe(
      pluck('loading'),
      tag('comments loading$')
    )

    this.revisionsResult$ = this.revisionsQueryRef.valueChanges.pipe(
      tag('revisions valueChange$')
    )
    this.revisionsLoading$ = this.revisionsResult$.pipe(
      pluck('loading'),
      tag('revisions loading$')
    )
    this.moderationResult$ = this.moderationQueryRef.valueChanges.pipe(
      tag('moderation valueChange$')
    )
    this.moderationLoading$ = this.moderationResult$.pipe(
      pluck('loading'),
      tag('moderation loading$')
    )

    const usersToUserRows = (
      lbUser: LeaderboardUserFieldsFragment[]
    ): UserLeaderboardRow[] => {
      return lbUser.map((lbUser) => {
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
      })
    }

    const dataToLeaderboards = (
      data: Maybe<UserLeaderboardsQuery>
    ): Maybe<UserLeaderboard>[] => {
      const boards: UserLeaderboard[] = []
      console.log('data: ', data)
      if (data) {
        this.leaderboardTitleMap.forEach((title, leaderboard) => {
          if (!leaderboard) return
          const lbUsers = data[leaderboard]
          console.log('lbUsers: ', lbUsers)
          boards.push({
            title: title,
            // rows: [],
            rows: usersToUserRows(lbUsers),
          })
        })
      }
      // const title = this.leaderboardTitleMap.get(key)
      // boards.push({
      //   title: title ? title : key,
      //   rows: usersToUserRows(data[key]),
      // })
      return boards
    }

    this.leaderboardsView$ = this.result$.pipe(
      distinctUntilChanged(),
      map((result) => {
        return {
          loading: result.loading,
          leaderboards: dataToLeaderboards(result.data),
        }
      })
    )

    // this.commentsLeaderboard$ = this.data$.pipe(
    //   pluck('userCommentsLeaderboard', 'nodes'),
    //   filter(isNonNulled),
    //   map((lbUsers) => usersToUserRows(lbUsers))
    //   // tag('commentsLeaderboard$')
    // )

    // this.revisionsLeaderboard$ = this.data$.pipe(
    //   pluck('userRevisionsLeaderboard', 'nodes'),
    //   filter(isNonNulled),
    //   map((lbUsers) => usersToUserRows(lbUsers))
    //   // tag('revisionsLeaderboard$')
    // )

    // this.moderationsLeaderboard$ = this.data$.pipe(
    //   pluck('userModerationLeaderboard', 'nodes'),
    //   filter(isNonNulled),
    //   map((lbUsers) => usersToUserRows(lbUsers))
    //   // tag('moderationsLeaderboard$')
    // )

    // this.submissionsLeaderboard$ = this.data$.pipe(
    //   pluck('userSubmissionsLeaderboard', 'nodes'),
    //   filter(isNonNulled),
    //   map((lbUsers) => usersToUserRows(lbUsers))
    //   // tag('submissionsLeaderboard$')
    // )
  }
}
