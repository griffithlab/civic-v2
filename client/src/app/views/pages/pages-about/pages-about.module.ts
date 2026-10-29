import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesAboutPage } from './pages-about.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcPreferredCitationsComponent } from '@app/components/shared/preferred-citations/preferred-citations.component'

@NgModule({
  declarations: [PagesAboutPage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
    NzTableModule,
    CvcPreferredCitationsComponent,
  ],
})
export class PagesAboutModule {}
