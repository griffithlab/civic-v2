import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcClinicalTrialTagComponent } from './clinical-trial-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcClinicalTrialPopoverModule } from '../clinical-trial-popover/clinical-trial-popover.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcClinicalTrialTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule,
    NzTagModule,
    NzPopoverModule,
    CvcClinicalTrialPopoverModule,
    CvcPipesModule,
  ],
  exports: [CvcClinicalTrialTagComponent],
})
export class CvcClinicalTrialTagModule {}
