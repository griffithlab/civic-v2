import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcOpenCravatAnnotationsComponent } from './open-cravat-annotations.component'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTableModule } from 'ng-zorro-antd/table'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'

@NgModule({
  declarations: [CvcOpenCravatAnnotationsComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzTableModule,
    NzCardModule,
    NzToolTipModule,
    NzGridModule,
    NzTypographyModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcPipesModule,
  ],
  exports: [CvcOpenCravatAnnotationsComponent],
})
export class CvcOpenCravatAnnotationsModule {}
