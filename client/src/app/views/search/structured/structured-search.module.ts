import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StructuredSearchPage } from './structured-search.page'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { NzTabsModule } from 'ng-zorro-antd/tabs'

@NgModule({
  declarations: [StructuredSearchPage],
  imports: [CommonModule, CvcAutoHeightDivModule, NzTabsModule],
  exports: [StructuredSearchPage],
})
export class StructuredSearchModule {}
