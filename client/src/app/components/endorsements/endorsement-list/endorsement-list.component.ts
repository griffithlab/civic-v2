import {
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  inject,
  input,
  Input,
  OnInit,
  runInInjectionContext,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  feedDefaultFilters,
  feedDefaultSettings,
} from '@app/components/activities/activity-feed/activity-feed.config'
import {
  ActivityFeedFilters,
  ActivityFeedSettings,
} from '@app/components/activities/activity-feed/activity-feed.types'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  EndorsementListGQL,
  EndorsementListNodeFragment,
  EndorsementListQuery,
  EndorsementListQueryVariables,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'

import { QueryRef } from 'apollo-angular'

import { filter, map, Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-endorsement-list',
  templateUrl: './endorsement-list.component.html',
  styleUrls: ['./endorsement-list.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEndorsementListComponent implements OnInit {
  assertionId = input.required<number>()

  /* SOURCE STREAMS */
  private response$!: Observable<ApolloQueryResult<EndorsementListQuery>>

  /* PRESENTATION SIGNALS */
  viewer!: Signal<Maybe<Viewer>>
  assertion!: Signal<Maybe<AssertionDetailFieldsFragment>>
  endorsements!: Signal<Maybe<EndorsementListNodeFragment>[]>
  loading!: Signal<boolean>
  pageInfo!: Signal<Maybe<PageInfo>>
  errors: WritableSignal<string[]>
  successMessage: WritableSignal<Maybe<string>>

  /* ATTRIBUTES */
  private queryRef!: QueryRef<
    EndorsementListQuery,
    EndorsementListQueryVariables
  >
  private pageSize = 5

  /* ATTRS TO BE REFACTORED */
  loading$?: Observable<boolean>
  pageInfo$?: Observable<PageInfo>
  endorsements$!: Observable<Maybe<EndorsementListNodeFragment>[]>
  $viewer: Signal<Maybe<Viewer>>

  constructor(
    private gql: EndorsementListGQL,
    private injector: EnvironmentInjector,
    private viewerService: ViewerService
  ) {
    this.$viewer = toSignal(this.viewerService.viewer$, {
      initialValue: undefined,
    })
    this.errors = signal<string[]>([])
    this.successMessage = signal<Maybe<string>>(undefined)
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      assertionId: this.assertionId(),
      first: this.pageSize,
    })

    this.response$ = this.queryRef.valueChanges

    runInInjectionContext(this.injector, () => {
      this.viewer = toSignal(
        this.viewerService.viewer$.pipe(
          map((viewer) => ({ ...viewer })) // create new object to trigger change detection
        )
      )
      this.endorsements = toSignal(
        this.response$.pipe(
          pluck('data', 'endorsements', 'edges'),
          filter(isNonNulled),
          map((edges) => edges.map((e) => e.node))
        ),
        {
          initialValue: [],
        }
      )
    })

    let results = this.queryRef.valueChanges

    this.pageInfo$ = results.pipe(
      pluck('data', 'endorsements', 'pageInfo'),
      filter(isNonNulled)
    )

    this.loading$ = results.pipe(map(({ loading }) => loading))

    this.endorsements$ = results.pipe(
      pluck('data', 'endorsements', 'edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e.node))
    )
  }

  onLoadMore(cursor: Maybe<string>): void {
    this.queryRef.fetchMore({
      variables: {
        last: this.pageSize,
        before: cursor,
      },
    })
  }

  refreshList() {
    this.queryRef.refetch()
  }
  feedSettings(): ActivityFeedSettings {
    return {
      ...feedDefaultSettings,
      showOrganization: false,
    }
  }
  feedFilters(endorsement: EndorsementListNodeFragment): ActivityFeedFilters {
    return {
      ...feedDefaultFilters,
      linkedEndorsementId: endorsement.id,
      occurredAfter: new Date(endorsement.lastReviewed),
    }
  }

  hasActiveEndorsement(
    currentOrgId: number,
    activeEndorsements: Maybe<EndorsementListNodeFragment>[]
  ): boolean {
    if (activeEndorsements.length === 0) return false
    return (
      activeEndorsements.filter((ae) => ae!.organization.id === currentOrgId)
        .length > 0
    )
  }
  readonly collapseStyle = {
    border: '1px solid red',
  }
}
