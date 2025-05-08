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
import { feedDefaultFilters, feedDefaultSettings } from '@app/components/activities/activity-feed/activity-feed.config'
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
  EndorsementStatus,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'

import { QueryRef } from 'apollo-angular'

import { filter, map } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { ApolloQueryResult } from '@apollo/client/core'
import { pluck } from 'rxjs-etc/operators'
import { CommonModule } from '@angular/common'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  CvcEndorseAssertionButtonComponent,
} from '@app/components/endorsements/endorse-assertion-button/endorse-assertion-button.component'
import {
  CvcCanPerformEndorsementActionsPipe,
} from '@app/components/endorsements/endorsement-pipes/can-perform-endorsement-actions.pipe'
import { CvcCanCreateEndorsementPipe } from '@app/components/endorsements/endorsement-pipes/can-create-endorsement.pipe'
import {
  CvcEndorsementActionTooltipPipe,
} from '@app/components/endorsements/endorsement-pipes/endorsement-action-tooltip.pipe'
import { CvcEndorsementItemComponent } from '@app/components/endorsements/endorsement-item/endorsement-item.component'

const STATUS_ORDER: EndorsementStatus[] = [
  EndorsementStatus.Active,
  EndorsementStatus.RequiresReview,
  EndorsementStatus.Revoked,
]

@Component({
  selector: 'cvc-endorsement-list',
  templateUrl: './endorsement-list.component.html',
  styleUrls: ['./endorsement-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NzAlertModule,
    NzButtonModule,
    NzListModule,
    NzIconModule,
    NzAvatarModule,
    NzTypographyModule,
    NzEmptyModule,
    NzDividerModule,
    CvcPipesModule,
    CvcEndorseAssertionButtonComponent,
    CvcCanPerformEndorsementActionsPipe,
    CvcCanCreateEndorsementPipe,
    CvcEndorsementActionTooltipPipe,
    CvcEndorsementItemComponent,
  ],
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
    this.queryRef = this.endorsementsGQL.watch(
      {
        assertionId: this.assertionId(),
      },
      { fetchPolicy: 'network-only' }
    )

    runInInjectionContext(this.injector, () => {
      this.endorsements = toSignal(
        this.queryRef.valueChanges.pipe(
          pluck('data', 'endorsements', 'nodes'),
          filter(isNonNulled),
          map((nodes) =>
            [...nodes].sort((a, b) => {
              // sort into Active, Review, and Revoked groups
              const sa = STATUS_ORDER.indexOf(a.status)
              const sb = STATUS_ORDER.indexOf(b.status)
              if (sa !== sb) {
                return sa - sb
              }
              // tie-break by updatedAt (newest first):
              return (
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime()
              )
            })
          )
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
          .valueChanges.pipe(pluck('data', 'assertion')),
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
