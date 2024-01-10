import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FeaturesReviseView } from './features-revise.view'
import { FeaturesSuggestModule } from './features-suggest/features-suggest.module'
import { FeaturesSuggestPage } from './features-suggest/features-suggest.page'

const routes: Routes = [
  {
    path: '',
    component: FeaturesReviseView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: FeaturesSuggestPage,
        data: {
          breadcrumb: 'Suggest Revision',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), FeaturesSuggestModule],
})
export class FeaturesReviseRoutingModule {}
