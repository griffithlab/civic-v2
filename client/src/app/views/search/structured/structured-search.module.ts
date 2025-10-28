import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StructuredSearchPage } from './structured-search.page'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { DiseaseSearchModule } from './disease-search/disease-search.module'

@NgModule({
  declarations: [StructuredSearchPage],
  imports: [
    CommonModule,
    CvcAutoHeightDivModule,
    NzTabsModule,
    DiseaseSearchModule,
  ],
  exports: [StructuredSearchPage],
})
export class StructuredSearchModule {}
