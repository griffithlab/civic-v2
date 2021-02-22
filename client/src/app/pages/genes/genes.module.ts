import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenesRoutingModule } from './genes-routing.module';
import { GenesComponent } from './genes.component';


@NgModule({
  declarations: [GenesComponent],
  imports: [
    CommonModule,
    GenesRoutingModule
  ]
})
export class GenesModule { }
