import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GeneReviseTestPage } from './gene-revise-test.page'
import { CvcGeneReviseFormModule } from '@app/forms2/config/gene-revise/gene-revise.form.module'

@NgModule({
  declarations: [GeneReviseTestPage],
  imports: [CommonModule, CvcGeneReviseFormModule],
})
export class GeneReviseTestModule {}
