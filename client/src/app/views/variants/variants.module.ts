import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantsRoutingModule } from './variants-routing.module';
import { VariantsComponent } from './variants.component';


@NgModule({
  declarations: [VariantsComponent],
  imports: [
    CommonModule,
    VariantsRoutingModule
  ]
})
export class VariantsModule { }
