import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NewsItemListComponent } from '@app/components/news/news-item-list/news-item-list.component'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NewsRoutingModule } from './news-routing.module'
import { NewsPage } from './news.page'

@NgModule({
  declarations: [NewsPage],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NzAlertModule,
    NzButtonModule,
    NzPageHeaderModule,
    CvcSectionNavigationModule,
    NewsItemListComponent,
  ],
})
export class NewsModule {}
