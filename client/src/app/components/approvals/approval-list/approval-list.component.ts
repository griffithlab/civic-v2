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
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  ApprovalListGQL,
  ApprovalListNodeFragment,
  ApprovalListQuery,
  ApprovalListQueryVariables,
  ApprovalStatus,
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
import { CvcApproveAssertionButtonComponent } from '@app/components/approvals/approve-assertion-button/approve-assertion-button.component'
import { CvcCanPerformApprovalActionsPipe } from '@app/components/approvals/approval-pipes/can-perform-approval-actions.pipe'
import { CvcApprovalActionTooltipPipe } from '@app/components/approvals/approval-pipes/approval-action-tooltip.pipe'
import { CvcApprovalItemComponent } from '@app/components/approvals/approval-item/approval-item.component'
import { CvcCurrentOrgCanApprovePipe } from '@app/components/approvals/approval-pipes/current-org-can-approve.pipe'
import { CvcCanCreateApprovalPipe } from '@app/components/approvals/approval-pipes/can-create-approval.pipe'

const STATUS_ORDER: ApprovalStatus[] = [
  ApprovalStatus.Active,
  ApprovalStatus.RequiresReview,
  ApprovalStatus.Revoked,
]

@Component({
  selector: 'cvc-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.less'],
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
    CvcApproveAssertionButtonComponent,
    CvcCanPerformApprovalActionsPipe,
    CvcApprovalActionTooltipPipe,
    CvcApprovalItemComponent,
    CvcCurrentOrgCanApprovePipe,
    CvcCanCreateApprovalPipe,
  ],
})
export class CvcApprovalListComponent implements OnInit {
  assertionId = input.required<number>()

  /* SOURCE SIGNALS */
  response!: Signal<Maybe<ApolloQueryResult<ApprovalListQuery>>>

  /* PRESENTATION SIGNALS */
  viewer: Signal<Maybe<Viewer>>
  assertion!: Signal<Maybe<AssertionDetailFieldsFragment>>
  approvals!: Signal<Maybe<ApprovalListNodeFragment>[]>
  loading!: Signal<boolean>
  pageInfo!: Signal<Maybe<PageInfo>>
  errors: WritableSignal<string[]>
  successMessage: WritableSignal<Maybe<string>>

  /* ATTRIBUTES */
  private queryRef!: QueryRef<ApprovalListQuery, ApprovalListQueryVariables>
  private pageSize = 5

  constructor(
    private approvalsGQL: ApprovalListGQL,
    private assertionGQL: AssertionDetailGQL,
    private injector: EnvironmentInjector,
    private viewerService: ViewerService
  ) {
    this.viewer = toSignal(this.viewerService.viewer$)
    this.errors = signal<string[]>([])
    this.successMessage = signal<Maybe<string>>(undefined)
  }

  ngOnInit() {
    this.queryRef = this.approvalsGQL.watch(
      {
        assertionId: this.assertionId(),
      },
      { fetchPolicy: 'network-only' }
    )

    runInInjectionContext(this.injector, () => {
      this.approvals = toSignal(
        this.queryRef.valueChanges.pipe(
          pluck('data', 'approvals', 'nodes'),
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
}
