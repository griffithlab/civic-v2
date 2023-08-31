import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  LeaderboardOrganizationFieldsFragment,
  Maybe,
  OrganizationCommentsLeaderboardGQL,
  OrganizationCommentsLeaderboardQuery,
  OrganizationCommentsLeaderboardQueryVariables,
  OrganizationModerationLeaderboardGQL,
  OrganizationModerationLeaderboardQuery,
  OrganizationModerationLeaderboardQueryVariables,
  OrganizationRevisionsLeaderboardGQL,
  OrganizationRevisionsLeaderboardQuery,
  OrganizationRevisionsLeaderboardQueryVariables,
  TimeWindow,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { WatchQueryOptionsAlone } from 'apollo-angular/types'
import { BehaviorSubject, map } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { TagLinkableOrganization } from '../organization-tag/organization-tag.component'

type OrganizationLeaderboardRow = {
  organization: TagLinkableOrganization
  name: Maybe<string>
  rank: number
  actionCount: number
  profileImagePath: Maybe<string>
}

type OrganizationLeaderboard = {
  title: string
  loading: boolean
  rows: Maybe<OrganizationLeaderboardRow>[]
}

@UntilDestroy()
@Component({
  selector: 'cvc-organization-leaderboards',
  templateUrl: './organization-leaderboards.component.html',
  styleUrls: ['./organization-leaderboards.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcOrganizationLeaderboardsComponent implements OnInit {
  // SOURCE STREAMS
  timeWindow$: BehaviorSubject<TimeWindow>

  // INTERMEDIATE STREAMS
  commentsQueryRef!: QueryRef<
    OrganizationCommentsLeaderboardQuery,
    OrganizationCommentsLeaderboardQueryVariables
  >
  revisionsQueryRef!: QueryRef<
    OrganizationRevisionsLeaderboardQuery,
    OrganizationRevisionsLeaderboardQueryVariables
  >
  moderationQueryRef!: QueryRef<
    OrganizationModerationLeaderboardQuery,
    OrganizationModerationLeaderboardQueryVariables
  >

  // PRESENTATION STREAMS
  commentsView$: BehaviorSubject<OrganizationLeaderboard>
  revisionsView$: BehaviorSubject<OrganizationLeaderboard>
  moderationView$: BehaviorSubject<OrganizationLeaderboard>

  initialCommentsView: OrganizationLeaderboard = {
    title: 'Comments',
    loading: false,
    rows: [],
  }

  initialRevisionsView: OrganizationLeaderboard = {
    title: 'Revisions',
    loading: false,
    rows: [],
  }
  initialModerationView: OrganizationLeaderboard = {
    title: 'Moderations',
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
    private commentsGQL: OrganizationCommentsLeaderboardGQL,
    private revisionsGQL: OrganizationRevisionsLeaderboardGQL,
    private moderationGQL: OrganizationModerationLeaderboardGQL
  ) {
    this.timeWindow$ = new BehaviorSubject<TimeWindow>(this.initialWindow)
    this.timeWindow$.pipe(untilDestroyed(this)).subscribe((window) => {
      this.commentsQueryRef.refetch({ window: window })
      this.revisionsQueryRef.refetch({ window: window })
      this.moderationQueryRef.refetch({ window: window })
    })
    this.commentsView$ = new BehaviorSubject<OrganizationLeaderboard>(
      this.initialCommentsView
    )
    this.revisionsView$ = new BehaviorSubject<OrganizationLeaderboard>(
      this.initialRevisionsView
    )
    this.moderationView$ = new BehaviorSubject<OrganizationLeaderboard>(
      this.initialModerationView
    )
  }

  ngOnInit(): void {
    const organizationToOrganizationRow = (
      lbOrganization: LeaderboardOrganizationFieldsFragment
    ): OrganizationLeaderboardRow => {
      return {
        rank: lbOrganization.rank,
        actionCount: lbOrganization.actionCount,
        profileImagePath: lbOrganization.profileImagePath,
        name: lbOrganization.name,
        organization: {
          id: lbOrganization.id,
          name: lbOrganization.name,
        },
      }
    }

    /*
     * REVISIONS
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
        map(
          (result: ApolloQueryResult<OrganizationCommentsLeaderboardQuery>) => {
            let rows: OrganizationLeaderboardRow[] = []
            if (result.data) {
              result.data.organizationCommentsLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            console.log(
              'Comments Row',
              rows.map((r) => ({
                name: r.organization.name,
                count: r.actionCount,
                rank: r.rank,
              }))
            )
            return <OrganizationLeaderboard>{
              title: 'Comments Added',
              loading: result.loading,
              rows: [...rows],
            }
          }
        ),
        // tag('comments valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.commentsView$.next(leaderboard))

    /*
     * MODERATIONS
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
        map(
          (
            result: ApolloQueryResult<OrganizationModerationLeaderboardQuery>
          ) => {
            let rows: OrganizationLeaderboardRow[] = []
            if (result.data) {
              result.data.organizationModerationLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            return <OrganizationLeaderboard>{
              title: 'Moderations Performed',
              loading: result.loading,
              rows: [...rows],
            }
          }
        ),
        // tag('moderation valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.moderationView$.next(leaderboard))

    // /*
    //  * REVISIONS
    //  */
    this.revisionsQueryRef = this.revisionsGQL.watch(
      {
        first: this.initialRows,
        window: this.initialWindow,
      },
      this.fetchPolicy
    )

    this.revisionsQueryRef.valueChanges
      .pipe(
        map(
          (
            result: ApolloQueryResult<OrganizationRevisionsLeaderboardQuery>
          ) => {
            let rows: OrganizationLeaderboardRow[] = []
            if (result.data) {
              result.data.organizationRevisionsLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            return <OrganizationLeaderboard>{
              title: 'Revisions Made',
              loading: result.loading,
              rows: [...rows],
            }
          }
        ),
        // tag('revisions valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.revisionsView$.next(leaderboard))
  }
}
