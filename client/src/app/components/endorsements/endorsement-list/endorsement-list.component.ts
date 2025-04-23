import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EnvironmentInjector,
  input,
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

import { map } from 'rxjs'

@Component({
  selector: 'cvc-endorsement-list',
  templateUrl: './endorsement-list.component.html',
  styleUrls: ['./endorsement-list.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEndorsementListComponent implements OnInit {
  assertionId = input.required<number>()

  /* SOURCE SIGNALS */
  private response!: Signal<Maybe<ApolloQueryResult<EndorsementListQuery>>>

  /* PRESENTATION SIGNALS */
  viewer: Signal<Maybe<Viewer>>
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

  constructor(
    private gql: EndorsementListGQL,
    private injector: EnvironmentInjector,
    private viewerService: ViewerService
  ) {
    this.viewer = toSignal(
      this.viewerService.viewer$.pipe(
        map((viewer) => ({ ...viewer })) // create new object to trigger change detection
      )
    )
    this.errors = signal<string[]>([])
    this.successMessage = signal<Maybe<string>>(undefined)
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      assertionId: this.assertionId(),
      first: this.pageSize,
    })

    runInInjectionContext(this.injector, () => {
      this.response = toSignal(this.queryRef.valueChanges, {
        initialValue: undefined,
      })
    })
    this.endorsements = computed(() => {
      let endorsements: Maybe<EndorsementListNodeFragment>[] = []
      const nodes = this.response()?.data?.endorsements.edges.map((e) => e.node)
      if (nodes) {
        endorsements = [...nodes]
      }
      return endorsements
    })

    this.pageInfo = computed(() => {
      return this.response()?.data?.endorsements.pageInfo || undefined
    })

    this.loading = computed(() => {
      return this.response()?.loading ?? false
    })
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
}
