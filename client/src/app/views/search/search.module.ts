import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchView } from '@app/views/search/search.view'
import { SearchRoutingModule } from '@app/views/search/search-routing.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzTagComponent } from 'ng-zorro-antd/tag'
import { PushPipe } from '@ngrx/component'
import { StructuredSearchModule } from './structured/structured-search.module'

@NgModule({
  declarations: [SearchView],
  imports: [
    SearchRoutingModule,
    CommonModule,
    NzPageHeaderModule,
    CvcPipesModule,
    NzIconDirective,
    NzTagComponent,
    PushPipe,
    CvcSectionNavigationModule,
    StructuredSearchModule,
  ],
})
export class SearchModule {}
