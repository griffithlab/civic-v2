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
  OrganizationSubmissionsLeaderboardGQL,
  OrganizationSubmissionsLeaderboardQuery,
  OrganizationSubmissionsLeaderboardQueryVariables,
  TimeWindow,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { WatchQueryOptionsAlone } from 'apollo-angular/types'
import { BehaviorSubject, map } from 'rxjs'
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
  info: string
  loading: boolean
  rows: Maybe<OrganizationLeaderboardRow>[]
}

@UntilDestroy()
@Component({
    selector: 'cvc-organization-leaderboards',
    templateUrl: './organization-leaderboards.component.html',
    styleUrls: ['./organization-leaderboards.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
  submissionsQueryRef!: QueryRef<
    OrganizationSubmissionsLeaderboardQuery,
    OrganizationSubmissionsLeaderboardQueryVariables
  >

  // PRESENTATION STREAMS
  commentsView$: BehaviorSubject<OrganizationLeaderboard>
  revisionsView$: BehaviorSubject<OrganizationLeaderboard>
  moderationView$: BehaviorSubject<OrganizationLeaderboard>
  submissionsView$: BehaviorSubject<OrganizationLeaderboard>

  initialCommentsView: OrganizationLeaderboard = {
    title: 'Comments Leaderboard',
    info: 'Organizations ranked by the total number of Comments posted by their members while acting on behalf of that Organization.',
    loading: false,
    rows: [],
  }

  initialRevisionsView: OrganizationLeaderboard = {
    title: 'Revisions Leaderboard',
    info: 'Organizations ranked by the total number of Revisions their members have suggested while acting on behalf of that Organization.',
    loading: false,
    rows: [],
  }
  initialModerationView: OrganizationLeaderboard = {
    title: 'Moderation Leaderboard',
    info: 'Organizations ranked by the total number of editorial actions their members have taken while acting on behalf of that Organization. This includes accepting and rejecting Revisions, Evidence, and Assertions.',
    loading: false,
    rows: [],
  }
  initialSubmissionsView: OrganizationLeaderboard = {
    title: 'Submissions Leaderboard',
    info: 'Organizations ranked by the total number of Evidence Items and Assertions their members have submitted while acting on behalf of that Organization',
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
    private moderationGQL: OrganizationModerationLeaderboardGQL,
    private submissionsGQL: OrganizationSubmissionsLeaderboardGQL
  ) {
    this.timeWindow$ = new BehaviorSubject<TimeWindow>(this.initialWindow)
    this.timeWindow$.pipe(untilDestroyed(this)).subscribe((window) => {
      this.commentsQueryRef.refetch({ window: window })
      this.revisionsQueryRef.refetch({ window: window })
      this.moderationQueryRef.refetch({ window: window })
      this.submissionsQueryRef.refetch({ window: window })
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
    this.submissionsView$ = new BehaviorSubject<OrganizationLeaderboard>(
      this.initialSubmissionsView
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
              result.data.organizationLeaderboards.commentsLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            return <OrganizationLeaderboard>{
              title: this.initialCommentsView.title,
              info: this.initialCommentsView.info,
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
              result.data.organizationLeaderboards.moderationLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            return <OrganizationLeaderboard>{
              title: this.initialModerationView.title,
              info: this.initialModerationView.info,
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
              result.data.organizationLeaderboards.revisionsLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            return <OrganizationLeaderboard>{
              title: this.initialRevisionsView.title,
              info: this.initialModerationView.info,
              loading: result.loading,
              rows: [...rows],
            }
          }
        ),
        // tag('revisions valueChange$'),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.revisionsView$.next(leaderboard))

    /*
     * SUBMISSIONS
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
        map(
          (
            result: ApolloQueryResult<OrganizationSubmissionsLeaderboardQuery>
          ) => {
            let rows: OrganizationLeaderboardRow[] = []
            if (result.data) {
              result.data.organizationLeaderboards.submissionsLeaderboard.edges.map((e) => {
                if (e.node) {
                  const row = organizationToOrganizationRow(e.node)
                  rows.push(row)
                }
              })
            }

            return <OrganizationLeaderboard>{
              title: this.initialSubmissionsView.title,
              info: this.initialSubmissionsView.info,
              loading: result.loading,
              rows: [...rows],
            }
          }
        ),
        untilDestroyed(this)
      )
      .subscribe((leaderboard) => this.submissionsView$.next(leaderboard))
  }
}
