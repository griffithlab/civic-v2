import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsRoutingModule } from './variant-groups-routing.module';
import { VariantGroupsView } from './variant-groups.view';
import { VariantGroupsHomeModule } from './variant-groups-home/variant-groups-home.module';

@NgModule({
  declarations: [VariantGroupsView],
  imports: [CommonModule, VariantGroupsRoutingModule, VariantGroupsHomeModule],
  exports: [VariantGroupsView],
})
export class VariantGroupsModule {}
