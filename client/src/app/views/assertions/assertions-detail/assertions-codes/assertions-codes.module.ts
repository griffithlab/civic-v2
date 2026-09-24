import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { AssertionsCodesPage } from './assertions-codes.page'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'

@NgModule({
  declarations: [AssertionsCodesPage],
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzPopoverModule,
    NzSpaceModule,
    NzTypographyModule,
    NzDescriptionsModule,
    NzGridModule,
    CvcEvidenceTagModule,
  ],
  exports: [AssertionsCodesPage],
})
export class AssertionsCodesModule {}
