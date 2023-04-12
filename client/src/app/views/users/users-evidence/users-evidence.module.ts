import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersEvidenceComponent } from './users-evidence.component'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'

@NgModule({
  declarations: [UsersEvidenceComponent],
  imports: [CommonModule, CvcEvidenceTableModule],
})
export class UsersEvidenceModule {}
