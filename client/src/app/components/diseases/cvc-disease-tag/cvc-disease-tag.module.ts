import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcDiseaseTagComponent } from './cvc-disease-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcDiseasePopoverModule } from '../cvc-disease-popover/cvc-disease-popover.module'
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
