import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEvidenceComponent } from './users-evidence.component';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';

@NgModule({
  declarations: [UsersEvidenceComponent],
  imports: [
    CommonModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
  ]
})
export class UsersEvidenceModule { }
