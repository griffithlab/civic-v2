import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionsRoutingModule } from './assertions-routing.module';
import { AssertionsComponent } from './assertions.component';


@NgModule({
  declarations: [AssertionsComponent],
  imports: [
    CommonModule,
    AssertionsRoutingModule
  ]
})
export class AssertionsModule { }
