import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsRoutingModule } from './variant-groups-routing.module';
import { VariantGroupsComponent } from './variant-groups.component';


@NgModule({
  declarations: [VariantGroupsComponent],
  imports: [
    CommonModule,
    VariantGroupsRoutingModule
  ]
})
export class VariantGroupsModule { }
