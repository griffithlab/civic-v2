// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MolecularProfilesRoutingModule } from './molecular-profiles-routing.module';
import { MolecularProfilesView } from './molecular-profiles.view';

@NgModule({
  declarations: [MolecularProfilesView],
  imports: [CommonModule, MolecularProfilesRoutingModule],
})
export class MolecularProfilesModule {}
