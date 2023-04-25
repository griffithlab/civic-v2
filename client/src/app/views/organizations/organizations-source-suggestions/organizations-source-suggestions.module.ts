import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OrganizationsSourceSuggestionsComponent } from './organizations-source-suggestions.component'
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module'

@NgModule({
  declarations: [OrganizationsSourceSuggestionsComponent],
  imports: [CommonModule, CvcSourceSuggestionsTableModule],
})
export class OrganizationsSourceSuggestionsModule {}
