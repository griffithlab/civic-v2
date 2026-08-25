import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { AssertionState } from '@app/forms/states/assertion.state'
import {
  AssertionPopoverFragment,
  AssertionPopoverGQL,
} from './assertion-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcAttributeTagModule } from '@app/components/shared/attribute-tag/attribute-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcApprovalNotificationComponent } from '@app/components/approvals/approval-notification/approval-notification.component'

@Component({
  selector: 'cvc-assertion-popover',
  templateUrl: './assertion-popover.component.html',
  styleUrls: ['./assertion-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzGridModule,
    NzSpaceModule,
    NzFlexModule,
    NzTagModule,
    NzTooltipModule,
    NzTypographyModule,
    NzAlertModule,
    CvcDiseaseTagModule,
    CvcMolecularProfileTagNameModule,
    CvcMolecularProfileTagModule,
    CvcPhenotypeTagModule,
    CvcTherapyTagModule,
    CvcPipesModule,
    CvcTagListModule,
    CvcStatusTagModule,
    CvcEntityChildCounts,
    CvcEmptyValueModule,
    CvcAttributeTagModule,
    CvcOrganizationTagModule,
    CvcApprovalNotificationComponent,
  ],
})
export class CvcAssertionPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() assertionId!: number
  @Output() contentRendered = new EventEmitter<void>()

  assertion$?: Observable<Maybe<AssertionPopoverFragment>>

  assertionRules = new AssertionState()
  private resizeObserver: ResizeObserver

  constructor(
    private gql: AssertionPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.assertion$ = this.gql
      .fetch({ variables: { assertionId: this.assertionId } })
      .pipe(
        map((r) => r.data),
        filter(isNonNulled),
        map(({ assertion }) => assertion)
      )
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
