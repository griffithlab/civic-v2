import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSourceSuggestionsComponent } from './users-source-suggestions.component';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [UsersSourceSuggestionsComponent],
  imports: [
    CommonModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcSourceSuggestionsTableModule,
  ]
})
export class UsersSourceSuggestionsModule { }
