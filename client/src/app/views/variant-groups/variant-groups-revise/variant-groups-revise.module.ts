import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsReviseRoutingModule } from './variant-groups-revise-routing.module';
import { VariantGroupsReviseView } from './variant-groups-revise.view';


@NgModule({
  declarations: [
    VariantGroupsReviseView
  ],
  imports: [
    CommonModule,
    VariantGroupsReviseRoutingModule
  ]
})
export class VariantGroupsReviseModule { }
