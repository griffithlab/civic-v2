// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenesRoutingModule } from './genes-routing.module';
import { GenesView } from './genes.view';

@NgModule({
  declarations: [
    GenesView
  ],
  imports: [
    CommonModule,
    GenesRoutingModule,
  ]
})

export class GenesModule { }
