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
import {
  EvidencePopoverFragment,
  EvidencePopoverGQL,
} from './evidence-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEvidenceRatingModule } from '../evidence-rating/evidence-rating.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'

@Component({
  selector: 'cvc-evidence-popover',
  templateUrl: './evidence-popover.component.html',
  styleUrls: ['./evidence-popover.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzSpaceModule,
    NzTypographyModule,
    NzTooltipModule,
    CvcTagListModule,
    CvcPipesModule,
    CvcAttributeTagModule,
    CvcEvidenceRatingModule,
    CvcTherapyTagModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    CvcSourceTagModule,
    CvcStatusTagModule,
    CvcClinicalTrialTagModule,
    CvcMolecularProfileTagModule,
    CvcMolecularProfileTagNameModule,
    CvcEmptyValueModule,
    CvcEntityChildCounts,
    NzSpinModule,
  ],
})
export class CvcEvidencePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() evidenceId!: number
  @Output() contentRendered = new EventEmitter<void>()

  evidence$?: Observable<Maybe<EvidencePopoverFragment>>
  private resizeObserver: ResizeObserver
  constructor(
    private gql: EvidencePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.evidence$ = this.gql
      .fetch({ variables: { evidenceId: this.evidenceId } })
      .pipe(
        map(({ data }) => data?.evidenceItem),
        filter(isNonNulled)
      )
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
