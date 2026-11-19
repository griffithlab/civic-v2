import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcSpecificationEvaluationTagComponent } from './specification-evaluation-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module'
import { CvcSpecificationEvaluationPopoverModule } from '../specification-evaluations-popover/specification-evaluation-popover.module'

@NgModule({
  declarations: [CvcSpecificationEvaluationTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcIconBadgesModule,
    CvcSpecificationEvaluationPopoverModule,
  ],
  exports: [CvcSpecificationEvaluationTagComponent],
})
export class CvcSpecificationEvaluationTagModule {}
