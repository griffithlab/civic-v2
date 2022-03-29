import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsEvidenceComponent } from './organizations-evidence.component';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [OrganizationsEvidenceComponent],
  imports: [
    CommonModule,
    CvcEntityTableCardModule,
    NzIconModule,
    CvcEvidenceTableModule,
  ]
})
export class OrganizationsEvidenceModule { }
