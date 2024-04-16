import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcTagGroupModule } from '../tag-group/tag-group.module'
import { CvcFeatureVariantTagComponent } from './feature-variant-tag.component'

@NgModule({
  declarations: [CvcFeatureVariantTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcVariantTagModule,
    CvcFeatureTagModule,
    CvcTagGroupModule
  ],
  exports: [CvcFeatureVariantTagComponent],
})
export class CvcFeatureVariantTagModule {}
