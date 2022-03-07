import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionAddRoutingModule } from './assertion-add-routing.module';
import { AssertionAddComponent } from './assertion-add.component';


@NgModule({
  declarations: [
    AssertionAddComponent
  ],
  imports: [
    CommonModule,
    AssertionAddRoutingModule
  ]
})
export class AssertionAddModule { }
