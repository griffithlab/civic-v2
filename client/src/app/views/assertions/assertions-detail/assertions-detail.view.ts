import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { ApolloQueryResult } from '@apollo/client/core'
import { ApprovalResult } from '@app/components/approvals/approve-assertion-button/approve-assertion-button.component'
import { CvcApprovableCounts } from '@app/components/approvals/approvable/approvable.component'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQuery,
  AssertionDetailQueryVariables,
  ApprovalListNodeFragment,
  EvidenceStatus,
  Maybe,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'

type ApprovalCounts = {
  active: number
  activeVcep: number
  requiresReview: number
  revoked: number
}

@UntilDestroy()
@Component({
  selector: 'assertions-detail',
  templateUrl: './assertions-detail.view.html',
  styleUrls: ['./assertions-detail.view.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssertionsDetailView {
  /* SOURCE SIGNALS */
  private response: Signal<Maybe<ApolloQueryResult<AssertionDetailQuery>>>

  /* PRESENTATION SIGNALS */
  viewer: Signal<Maybe<Viewer>>
  loading: Signal<boolean>
  assertion: Signal<Maybe<AssertionDetailFieldsFragment>>
  approvals: Signal<ApprovalListNodeFragment[]>
  approvalCounts: Signal<ApprovalCounts>
  approvableCounts: Signal<CvcApprovableCounts>
  tabConfig: Signal<RouteableTab[]>
  subscribableInput: Signal<Maybe<SubscribableInput>>
  errors: WritableSignal<string[]>
  successMessage: WritableSignal<Maybe<string>>

  /* ATTRIBUTES */
  private queryRef: QueryRef<
    AssertionDetailQuery,
    AssertionDetailQueryVariables
  >
  assertionId?: number

  // CONSTANTS
  SUBSCRIBABLE_ENTITY_TYPE = SubscribableEntities.Assertion
  SUBSCRIBABLE_ENTITY_TYPENAME = 'Assertion'
  DEFAULT_TAB_CONFIG: RouteableTab[] = [
    {
      routeName: 'summary',
      iconName: 'pic-left',
      tabLabel: 'Summary',
    },
    {
      routeName: 'comments',
      iconName: 'civic-comment',
      tabLabel: 'Comments',
    },
    {
      routeName: 'revisions',
      iconName: 'civic-revision',
      tabLabel: 'Revisions',
    },
    {
      routeName: 'flags',
      iconName: 'civic-flag',
      tabLabel: 'Flags',
    },
    {
      routeName: 'approvals',
      iconName: 'safety-certificate',
      tabLabel: 'Approvals',
    },
    {
      routeName: 'events',
      iconName: 'civic-event',
      tabLabel: 'Activity',
    },
  ]

  constructor(
    private gql: AssertionDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    /**************************
     CONFIGURE QUERY & RESPONSE
     **************************/
    // get assertionId from route params
    this.assertionId = +this.route.snapshot.params['assertionId']

    // save query reference for calling refetch() or fetchMore()
    this.queryRef = this.gql.watch({ assertionId: this.assertionId })

    // provide valueChanges observable as response signal
    this.response = toSignal(this.queryRef.valueChanges, {
      initialValue: undefined,
    })

    // provide viewer$ observable as signal
    this.viewer = toSignal(this.viewerService.viewer$)

    this.loading = computed(() => {
      return this.response()?.loading ?? false
    })

    this.assertion = computed(() => {
      const assertion = this.response()?.data?.assertion
      return assertion ? { ...assertion } : undefined
    })

    // provide subscribable input as signal derived from assertion & entity type constant
    this.subscribableInput = computed(() => {
      const assertion = this.assertion()
      let subscribable: Maybe<SubscribableInput>
      if (assertion) {
        subscribable = {
          id: assertion.id,
          entityType: this.SUBSCRIBABLE_ENTITY_TYPE,
        }
      }
      return subscribable
    })

    // provide approvals as signal derived from assertion approval connection
    this.approvals = computed(() => {
      return this.assertion()?.approvals.nodes || []
    })

    // provide approval counts as signal derived from assertion approval connection
    this.approvalCounts = computed(() => {
      const approvals = this.approvals()
      let counts = {
        active: 0,
        activeVcep: 0,
        requiresReview: 0,
        revoked: 0,
      }
      if (approvals.length > 0) {
        counts = {
          active: approvals.filter(
            (node: ApprovalListNodeFragment) =>
              node.status === 'ACTIVE' && !node.organization.isApprovedVcep
          ).length,
          activeVcep: approvals.filter(
            (node: ApprovalListNodeFragment) =>
              node.status === 'ACTIVE' && node.organization.isApprovedVcep
          ).length,
          requiresReview: approvals.filter(
            (node: ApprovalListNodeFragment) =>
              node.status === 'REQUIRES_REVIEW'
          ).length,
          revoked: approvals.filter(
            (node: ApprovalListNodeFragment) => node.status === 'REVOKED'
          ).length,
        }
      }
      return counts
    })

    // provide flaggable counts as signal derived from flag & approval counts
    this.approvableCounts = computed(() => {
      const assertion = this.assertion()
      let counts = {
        flags: 0,
        approvals: 0,
        vcepApprovals: 0,
      }
      if (assertion) {
        counts = {
          flags: assertion.flags.totalCount,
          approvals: this.approvalCounts().active,
          vcepApprovals: this.approvalCounts().activeVcep,
        }
      }
      return counts
    })

    // compute tab configuration
    this.tabConfig = computed(() => {
      const assertion = this.assertion()
      let tabConfig = [...this.DEFAULT_TAB_CONFIG]
      if (assertion) {
        tabConfig = this.DEFAULT_TAB_CONFIG.map((tab) => {
          if (tab.tabLabel === 'Revisions') {
            return {
              badgeCount: assertion.revisions.totalCount,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else if (tab.tabLabel === 'Flags') {
            return {
              badgeCount: assertion.flags.totalCount,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else if (tab.tabLabel === 'Comments') {
            return {
              badgeCount: assertion.comments.totalCount,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else if (tab.tabLabel === 'Approvals') {
            let count: Maybe<number> =
              this.approvalCounts().active +
              this.approvalCounts().requiresReview
            if (count == 0) {
              count = undefined
            }
            return {
              badgeCount: count,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else {
            return tab
          }
        })
      }
      return tabConfig
    })

    // provide interaction feedback signals
    this.errors = signal<string[]>([])
    this.successMessage = signal<Maybe<string>>(undefined)
  } // end constructor

  onRevert(revertEvent: true | string[]) {
    if (revertEvent === true) {
      this.errors.set([])
      this.successMessage.set(
        `Assertion AID${this.assertionId} reverted to Submitted status.`
      )
      this.queryRef.refetch()
    } else {
      this.errors.set(revertEvent)
      this.successMessage.set(undefined)
    }
  }

  onModeration(moderationEvent: EvidenceStatus | string[]) {
    if (Array.isArray(moderationEvent)) {
      this.errors.set(moderationEvent)
      this.successMessage.set(undefined)
    } else {
      this.errors.set([])
      this.successMessage.set(moderationEvent)
    }
  }

  onErrorBannerClose(err: Maybe<string>) {
    if (err) {
      this.errors.set(this.errors().filter((e) => e != err))
    }
  }

  onSuccessBannerClose() {
    this.successMessage.set(undefined)
  }

  onApproval(approvalEvent: ApprovalResult) {
    if (approvalEvent.success) {
      switch (approvalEvent.action) {
        case 'approve':
          this.successMessage.set(
            'Assertion Classification Approved successfully'
          )
          break
        case 'revoke':
          this.successMessage.set('Successfully revoked approval')
          break
      }
    } else {
      this.errors.set(approvalEvent.errors)
      this.successMessage.set(undefined)
    }
  }
}
