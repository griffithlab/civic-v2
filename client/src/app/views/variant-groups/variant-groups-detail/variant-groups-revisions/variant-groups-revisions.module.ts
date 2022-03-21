import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsRevisionsPage } from './variant-groups-revisions.page';
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';

@NgModule({
  declarations: [VariantGroupsRevisionsPage],
  imports: [
    CommonModule,
    CvcRevisionsListAndFilterModule,
  ],
  exports: [VariantGroupsRevisionsPage],
})
export class VariantGroupsRevisionsModule { }
