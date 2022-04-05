import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsEvidenceComponent } from './organizations-evidence.component';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';

@NgModule({
  declarations: [OrganizationsEvidenceComponent],
  imports: [
    CommonModule,
    CvcEvidenceTableModule,
  ]
})
export class OrganizationsEvidenceModule { }
