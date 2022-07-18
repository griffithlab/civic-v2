import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolecularProfilesSuggestPage } from './molecular-profiles-suggest.page';
import { MolecularProfileSuggestRevisionFormModule } from '@app/forms/molecular-profile-revise/molecular-profile-revise.module';

@NgModule({
  declarations: [MolecularProfilesSuggestPage],
  imports: [
    CommonModule,
    MolecularProfileSuggestRevisionFormModule,
  ]
})
export class MolecularProfilesSuggestModule { }
