import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesAiPage } from './pages-ai.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzCardModule } from 'ng-zorro-antd/card'

@NgModule({
  declarations: [PagesAiPage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzCardModule,
    NzTypographyModule,
  ],
})
export class PagesAiModule {}
