import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcMyVariantInfoComponent } from './my-variant-info.component'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTableModule } from 'ng-zorro-antd/table'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'

@NgModule({
  declarations: [CvcMyVariantInfoComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzTableModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    NzGridModule,
    CvcPipesModule,
  ],
  exports: [CvcMyVariantInfoComponent],
})
export class CvcMyVariantInfoModule {}
