import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchView } from '@app/views/search/search.view'
import { SearchRoutingModule } from '@app/views/search/search-routing.module'

@NgModule({
  declarations: [SearchView],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
