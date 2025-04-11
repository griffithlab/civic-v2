import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Signal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
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
  EndorsementListGQL,
  EndorsementListNodeFragment,
  EndorsementListQuery,
  EndorsementListQueryVariables,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'

import { QueryRef } from 'apollo-angular'

import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { filter, map } from 'rxjs/operators'

type ActiveEndorsement = {
  organization: {
    id: number
  }
}
@Component({
  selector: 'cvc-endorsement-list',
  templateUrl: './endorsement-list.component.html',
  styleUrls: ['./endorsement-list.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEndorsementListComponent implements OnInit {
  @Input() assertionId!: number

  loading$?: Observable<boolean>
  pageInfo$?: Observable<PageInfo>
  endorsements$!: Observable<Maybe<EndorsementListNodeFragment>[]>
  $viewer: Signal<Maybe<Viewer>>
  private queryRef$!: QueryRef<
    EndorsementListQuery,
    EndorsementListQueryVariables
  >

  private pageSize = 5
  constructor(
    private gql: EndorsementListGQL,
    viewerService: ViewerService
  ) {
    this.$viewer = toSignal(viewerService.viewer$, {
      initialValue: undefined,
    })
  }

  ngOnInit() {
    this.queryRef$ = this.gql.watch({
      assertionId: this.assertionId,
      last: this.pageSize,
    })

    let results = this.queryRef$.valueChanges

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
    this.queryRef$.fetchMore({
      variables: {
        last: this.pageSize,
        before: cursor,
      },
    })
  }

  refreshList() {
    this.queryRef$.refetch()
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
