import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesHelpPage } from './pages-help.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzInputModule } from 'ng-zorro-antd/input'

@NgModule({
  declarations: [PagesHelpPage],
  imports: [
    CommonModule,
    NzInputModule,
    NzPageHeaderModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
  ],
})
export class PagesHelpModule {}
