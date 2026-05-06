import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcDiseaseTagComponent } from './disease-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcDiseasePopoverModule } from '@app/components/diseases/disease-popover/disease-popover.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcDiseaseTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcDiseasePopoverModule,
  ],
  exports: [CvcDiseaseTagComponent],
})
export class CvcDiseaseTagModule {}
