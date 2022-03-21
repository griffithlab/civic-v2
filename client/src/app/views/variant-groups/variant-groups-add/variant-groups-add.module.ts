import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsAddRoutingModule } from './variant-groups-add-routing.module';
import { VariantGroupsAddView } from './variant-groups-add.view';


@NgModule({
  declarations: [
    VariantGroupsAddView
  ],
  imports: [
    CommonModule,
    VariantGroupsAddRoutingModule
  ]
})
export class VariantGroupsAddModule { }
