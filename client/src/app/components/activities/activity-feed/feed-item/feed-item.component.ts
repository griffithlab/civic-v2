import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  input,
  effect,
  OnInit,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  ActivityFeedItemFragment,
  ActivityFeedItemGQL,
  ActivityFeedItemQuery,
  ActivityFeedItemQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { PushPipe } from '@ngrx/component'
import { QueryRef } from 'apollo-angular'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { Observable, Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { CvcCommentActivity } from '../feed-item-details/comment/comment-activity.component'
import { CvcActivityFeedItemDetails } from '../feed-item-details/feed-item-details.component'

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed-item',
  standalone: true,
  imports: [
    CommonModule,
    PushPipe,
    NzIconModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule,
    CvcPipesModule,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcGeneTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcRevisionTagModule,
    CvcVariantGroupTagModule,
    CvcSourceTagModule,
    CvcMolecularProfileTagModule,
    CvcCommentActivity,
    CvcActivityFeedItemDetails,
  ],
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedItem implements OnInit {
  cvcActivity = input.required<ActivityFeedItemFragment>()
  toggleDetail$: Subject<void>

  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>

  loading: WritableSignal<boolean>
  activity: WritableSignal<Maybe<ActivityFeedItemFragment>>

  showDetails: WritableSignal<boolean>
  constructor(private gql: ActivityFeedItemGQL) {
    this.showDetails = signal(false)
    this.toggleDetail$ = new Subject<void>()
    this.toggleDetail$.pipe(untilDestroyed(this)).subscribe(() => {
      this.showDetails.set(!this.showDetails())
    })
    this.loading = signal(false)
    this.activity = signal(undefined)
    effect(() => {
      if (this.showDetails()) {
        this.fetchDetails()
      }
    })
  }

  ngOnInit(): void {
    this.activity.set(this.cvcActivity())
  }

  fetchDetails(): void {
    if (!this.queryRef) {
      this.queryRef = this.gql.watch({
        id: this.cvcActivity().id,
        requestDetails: true,
      })
      this.result$ = this.queryRef.valueChanges
      this.result$.pipe(untilDestroyed(this)).subscribe((result) => {
        this.loading.set(result.loading)
        if (result.data.activity) {
          this.activity.update((previous) => {
            if (previous) {
              return {
                ...previous,
                ...result.data.activity,
              }
            } else {
              return result.data.activity
            }
          })
        }
      })
    } else {
      this.queryRef.refetch({
        id: this.cvcActivity().id,
        requestDetails: true,
      })
    }
  }
}
