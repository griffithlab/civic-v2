import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcMyGeneInfoComponent } from './my-gene-info.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'

@NgModule({
  declarations: [CvcMyGeneInfoComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzTabsModule,
    NzTableModule,
    NzGridModule,
    NzTableModule,
    NzTypographyModule,
    NzDescriptionsModule,
  ],
  exports: [CvcMyGeneInfoComponent],
})
export class CvcMyGeneInfoModule {}
