import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneSearchFormModule } from '@app/forms/gene-search/gene-search.module';
import { GeneAdvancedSearchPage } from './gene-advanced-search.page';

@NgModule({
  declarations: [
    GeneAdvancedSearchPage
  ],
  imports: [
    CommonModule,
    GeneSearchFormModule,
  ]
})
export class GeneAdvancedSearchPageModule { }
