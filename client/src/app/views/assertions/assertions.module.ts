import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionsRoutingModule } from './assertions-routing.module';
import { AssertionsView } from './assertions.view';

@NgModule({
  declarations: [AssertionsView],
  imports: [
    CommonModule,
    AssertionsRoutingModule,
  ],
  exports: [AssertionsView]
})
export class AssertionsModule { }
