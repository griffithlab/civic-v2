import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlagsRoutingModule } from './flags-routing.module';
import { FlagsComponent } from './flags.component';
import { FlagsHomeModule } from './flags-home/flags-home.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    FlagsComponent,
  ],
  imports: [
    CommonModule,
    NzIconModule,
    FlagsRoutingModule,
    FlagsHomeModule,
  ],
  exports: [
  ]
})
export class FlagsModule { }
