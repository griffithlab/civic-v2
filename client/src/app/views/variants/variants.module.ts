// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VariantsDetailRoutingModule } from './variants-detail/variants-detail-routing.module';
import { VariantsComponent } from './variants.component';

@NgModule({
  declarations: [
    VariantsComponent,
  ],
  imports: [
    CommonModule,
    VariantsDetailRoutingModule
  ],
})
export class VariantsModule {}
