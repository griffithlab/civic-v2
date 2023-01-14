import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatisticsMainModule } from './statistics-main/statistics-main.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, StatisticsRoutingModule, StatisticsMainModule],
})
export class StatisticsModule {}
