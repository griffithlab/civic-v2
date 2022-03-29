import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsSourceSuggestionsComponent } from './organizations-source-suggestions.component';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [OrganizationsSourceSuggestionsComponent],
  imports: [
    CommonModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcSourceSuggestionsTableModule,
  ]
})
export class OrganizationsSourceSuggestionsModule { }
