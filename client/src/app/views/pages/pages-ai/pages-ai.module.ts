import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesAiPage } from './pages-ai.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'

@NgModule({
  declarations: [PagesAiPage],
  imports: [CommonModule, NzPageHeaderModule, NzGridModule],
})
export class PagesAiModule {}
