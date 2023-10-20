import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StatisticsMainComponent } from './statistics-main/statistics-main.component'
import { StatisticsComponent } from './statistics.component'

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: StatisticsMainComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
