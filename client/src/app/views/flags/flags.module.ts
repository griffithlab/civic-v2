import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { FlagsRoutingModule } from './flags-routing.module';
import { FlagsComponent } from './flags.component';
import { FlagsBrowseComponent } from './flags-browse/flags-browse.component';
import { FlagsHomeModule } from './flags-home/flags-home.module';

@NgModule({
  declarations: [
    FlagsComponent,
    FlagsBrowseComponent,
  ],
  imports: [
    CommonModule,
    FlagsRoutingModule,
    FlagsHomeModule,
  ],
  exports: [
    FlagsBrowseComponent,
  ]
})
export class FlagsModule { }
