import {
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  input,
  OnInit,
  runInInjectionContext,
  signal,
  Signal,
  WritableSignal,
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
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  EndorsementListGQL,
  EndorsementListNodeFragment,
  EndorsementListQuery,
  EndorsementListQueryVariables,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'

import { QueryRef } from 'apollo-angular'

import { filter, map } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { ApolloQueryResult } from '@apollo/client/core'

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
  response!: Signal<Maybe<ApolloQueryResult<EndorsementListQuery>>>

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
    private endorsementsGQL: EndorsementListGQL,
    private assertionGQL: AssertionDetailGQL,
    private injector: EnvironmentInjector,
    private viewerService: ViewerService
  ) {
    this.viewer = toSignal(this.viewerService.viewer$)
    this.errors = signal<string[]>([])
    this.successMessage = signal<Maybe<string>>(undefined)
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      this.queryRef = this.endorsementsGQL.watch(
        {
          assertionId: this.assertionId(),
        },
        { fetchPolicy: 'network-only' }
      )

      this.endorsements = toSignal(
        this.queryRef.valueChanges.pipe(
          map((res) => res.data?.endorsements?.nodes),
          filter(isNonNulled)
        ),
        {
          initialValue: [],
        }
      )
      this.assertion = toSignal(
        this.assertionGQL
          .watch(
            {
              assertionId: this.assertionId(),
            },
            { fetchPolicy: 'cache-only' }
          )
          .valueChanges.pipe(map((res) => res.data?.assertion)),
        {
          initialValue: undefined,
        }
      )
    })
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
}
