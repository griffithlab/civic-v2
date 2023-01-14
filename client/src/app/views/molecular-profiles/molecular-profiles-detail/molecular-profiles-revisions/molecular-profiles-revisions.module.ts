import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolecularProfilesRevisionsPage } from './molecular-profiles-revisions.page';
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';

@NgModule({
  declarations: [MolecularProfilesRevisionsPage],
  imports: [CommonModule, CvcRevisionsListAndFilterModule],
  exports: [MolecularProfilesRevisionsPage],
})
export class MolecularProfilesRevisionsModule {}
