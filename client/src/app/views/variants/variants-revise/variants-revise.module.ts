import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantsReviseRoutingModule } from './variants-revise-routing.module';
import { VariantsReviseComponent } from './variants-revise.view';


@NgModule({
  declarations: [VariantsReviseComponent],
  imports: [
    CommonModule,
    VariantsReviseRoutingModule
  ]
})
export class VariantsReviseModule { }
