import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingSourcesPage } from './pending-sources.page';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';

@NgModule({
  declarations: [
    PendingSourcesPage
  ],
  imports: [
    CommonModule,
    CvcSourceSuggestionsTableModule,
  ]
})
export class PendingSourcesModule { }
