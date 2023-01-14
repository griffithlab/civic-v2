import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsFlagsPage } from './variant-groups-flags.page';
import { CvcFlagListAndFilterModule } from '@app/components/flags/flag-list-and-filter/flag-list-and-filter.module';

@NgModule({
  declarations: [VariantGroupsFlagsPage],
  imports: [CommonModule, CvcFlagListAndFilterModule],
  exports: [VariantGroupsFlagsPage],
})
export class VariantGroupsFlagsModule {}
