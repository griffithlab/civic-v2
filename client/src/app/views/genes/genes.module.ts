// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenesRoutingModule } from './genes-routing.module';
import { GenesComponent } from './genes.component';

@NgModule({
  declarations: [
    GenesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GenesRoutingModule,
  ]
})

export class GenesModule { }
