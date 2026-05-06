import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EvidenceReviseTestPage } from './evidence-revise-test.page'
import { CvcEvidenceReviseFormModule } from '@app/forms/config/evidence-revise/evidence-revise.form.module'

@NgModule({
  declarations: [EvidenceReviseTestPage],
  imports: [CommonModule, CvcEvidenceReviseFormModule],
})
export class EvidenceReviseTestModule {}
