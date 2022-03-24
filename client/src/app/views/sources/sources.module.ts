import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourcesRoutingModule } from './sources-routing.module';
import { SourcesView } from './sources.view';

import { SourcesHomeModule } from './sources-home/sources-home.module';
import { SourcesDetailModule } from './sources-detail/sources-detail.module';
import { SourcesSummaryModule } from './sources-summary/sources-summary.module';
import { SourceAddModule } from './source-add/source-add.module';

@NgModule({
  declarations: [
    SourcesView,
  ],
  imports: [
    CommonModule,
    SourcesRoutingModule,
    SourcesHomeModule,
    SourcesDetailModule,
    SourcesSummaryModule,
    SourceAddModule,
  ],
})
export class SourcesModule { }
