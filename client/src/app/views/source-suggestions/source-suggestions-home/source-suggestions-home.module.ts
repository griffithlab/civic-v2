import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SourceSuggestionsHomePage } from './source-suggestions-home.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module'

@NgModule({
  declarations: [SourceSuggestionsHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcSourceSuggestionsTableModule,
  ],
  exports: [SourceSuggestionsHomePage],
})
export class SourceSuggestionsHomeModule {}
