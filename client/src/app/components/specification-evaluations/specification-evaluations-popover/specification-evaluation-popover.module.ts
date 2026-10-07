import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcAttributeTagModule } from '@app/components/shared/attribute-tag/attribute-tag.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcSpecificationEvaluationPopoverComponent } from './specification-evaluation-popover.component'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'

@NgModule({
  declarations: [CvcSpecificationEvaluationPopoverComponent],
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
    NzToolTipModule,
    NzTypographyModule,
    NzAlertModule,
    NzFlexModule,
    CvcPipesModule,
    CvcTagListModule,
    CvcStatusTagModule,
    CvcEmptyValueModule,
    CvcAttributeTagModule,
    CvcEvidenceTagModule,
  ],
  exports: [CvcSpecificationEvaluationPopoverComponent],
})
export class CvcSpecificationEvaluationPopoverModule {}
