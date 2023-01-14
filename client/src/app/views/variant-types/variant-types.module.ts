import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VariantTypesDetailModule } from './variant-types-detail/variant-types-detail.module';
import { VariantTypesSummaryModule } from './variant-types-detail/variant-types-summary/variant-types-summary.module';
import { VariantTypesHomeModule } from './variant-types-home/variant-types-home.module';
import { VariantTypesRoutingModule } from './variant-types-routing.module';
import { VariantTypesComponent } from './variant-types.component';

@NgModule({
  declarations: [VariantTypesComponent],
  imports: [
    CommonModule,
    RouterModule,
    VariantTypesRoutingModule,
    VariantTypesHomeModule,
    VariantTypesDetailModule,
    VariantTypesSummaryModule,
  ],
})
export class VariantTypesModule {}
