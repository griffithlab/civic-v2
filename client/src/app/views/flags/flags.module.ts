import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlagsRoutingModule } from './flags-routing.module';
import { FlagsComponent } from './flags.component';
import { FlagsBrowseComponent } from './flags-browse/flags-browse.component';

import { IconsProviderModule } from '@app/icons-provider.module';


@NgModule({
  declarations: [
    FlagsComponent,
    FlagsBrowseComponent,
  ],
  imports: [
    CommonModule,
    FlagsRoutingModule,
    IconsProviderModule
  ],
  exports: [
    FlagsBrowseComponent,
  ]
})
export class FlagsModule { }
