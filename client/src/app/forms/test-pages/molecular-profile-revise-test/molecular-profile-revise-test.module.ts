import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MolecularProfileReviseTestPage } from './molecular-profile-revise-test.page'
import { CvcMolecularProfileReviseFormModule } from '@app/forms/config/molecular-profile-revise/molecular-profile-revise.form.module'

@NgModule({
  declarations: [MolecularProfileReviseTestPage],
  imports: [CommonModule, CvcMolecularProfileReviseFormModule],
})
export class MolecularProfileReviseTestModule {}
