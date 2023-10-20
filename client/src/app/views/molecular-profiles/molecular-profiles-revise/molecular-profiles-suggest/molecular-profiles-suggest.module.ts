import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MolecularProfilesSuggestPage } from './molecular-profiles-suggest.page'
import { CvcMolecularProfileReviseFormModule } from '@app/forms/config/molecular-profile-revise/molecular-profile-revise.form.module'

@NgModule({
  declarations: [MolecularProfilesSuggestPage],
  imports: [CommonModule, CvcMolecularProfileReviseFormModule],
})
export class MolecularProfilesSuggestModule {}
