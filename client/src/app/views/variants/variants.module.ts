// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VariantsRoutingModule } from './variants-routing.module';
import { VariantsComponent } from './variants.component';

@NgModule({
  declarations: [
    VariantsComponent,
  ],
  imports: [
    CommonModule,
    VariantsRoutingModule
  ],
})
export class VariantsModule {}
