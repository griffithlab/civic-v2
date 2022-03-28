import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationRoutingModule } from './curation-routing.module';
import { CurationView } from './curation.view';


@NgModule({
  declarations: [
    CurationView
  ],
  imports: [
    CommonModule,
    CurationRoutingModule
  ]
})
export class CurationModule { }
