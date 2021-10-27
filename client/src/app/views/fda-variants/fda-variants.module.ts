import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FdaVariantsRoutingModule } from './fda-variants-routing.module';
import { FdaVariantsView } from './fda-variants.view';


@NgModule({
  declarations: [FdaVariantsView],
  imports: [
    CommonModule,
    FdaVariantsRoutingModule
  ],
  exports: [FdaVariantsView]
})
export class FdaVariantsModule { }
