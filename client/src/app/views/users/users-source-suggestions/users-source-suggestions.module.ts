import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSourceSuggestionsComponent } from './users-source-suggestions.component';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';

@NgModule({
  declarations: [UsersSourceSuggestionsComponent],
  imports: [
    CommonModule,
    CvcSourceSuggestionsTableModule,
  ]
})
export class UsersSourceSuggestionsModule { }
