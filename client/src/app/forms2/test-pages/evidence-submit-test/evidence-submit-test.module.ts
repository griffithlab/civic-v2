import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EvidenceSubmitTestPage } from './evidence-submit-test.page'
import { CvcEvidenceSubmitFormModule } from '@app/forms2/config/evidence-submit/evidence-submit.form.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'

@NgModule({
  declarations: [EvidenceSubmitTestPage],
  imports: [CommonModule, CvcEvidenceSubmitFormModule, NzSpaceModule],
})
export class EvidenceSubmitTestModule {}
