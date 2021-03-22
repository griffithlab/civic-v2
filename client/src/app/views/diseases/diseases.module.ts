import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseasesRoutingModule } from './diseases-routing.module';
import { DiseasesComponent } from './diseases.component';


@NgModule({
  declarations: [DiseasesComponent],
  imports: [
    CommonModule,
    DiseasesRoutingModule
  ]
})
export class DiseasesModule { }
