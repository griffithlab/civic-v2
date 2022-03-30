import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugsRoutingModule } from './drugs-routing.module';
import { DrugsComponent } from './drugs.component';
import { DrugsDetailModule } from './drugs-detail/drugs-detail.module';
import { DrugsSummaryModule } from './drugs-detail/drugs-summary/drugs-summary.module';
import { RouterModule } from '@angular/router';
import { DrugsHomeModule } from './drugs-home/drugs-home.module';

@NgModule({
  declarations: [
    DrugsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DrugsRoutingModule,
    DrugsHomeModule,
    DrugsDetailModule,
    DrugsSummaryModule,
  ],
})
export class DrugsModule {}
