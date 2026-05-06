import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FeaturesCommentsModule } from './features-comments/features-comments.module'
import { FeaturesCommentsPage } from './features-comments/features-comments.page'
import { FeaturesDetailView } from './features-detail.view'
import { FeaturesEventsModule } from './features-events/features-events.module'
import { FeaturesEventsPage } from './features-events/features-events.page'
import { FeaturesFlagsModule } from './features-flags/feature-flags.module'
import { FeaturesFlagsPage } from './features-flags/features-flags.page'
import { FeaturesRevisionsModule } from './features-revisions/features-revisions.module'
import { FeaturesRevisionsPage } from './features-revisions/features-revisions.page'
import { FeaturesSummaryModule } from './features-summary/features-summary.module'
import { FeaturesSummaryPage } from './features-summary/features-summary.page'

const routes: Routes = [
  {
    path: '',
    component: FeaturesDetailView,
    // setting 'DISPLAYNAME' here will cause breadcrumb & title generation logic
    // to use a provided displayName instead of breadcrumb string
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: FeaturesSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'comments',
        component: FeaturesCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: FeaturesRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: FeaturesFlagsPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'events',
        component: FeaturesEventsPage,
        data: {
          breadcrumb: 'Events',
        },
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FeaturesSummaryModule,
    FeaturesCommentsModule,
    FeaturesRevisionsModule,
    FeaturesFlagsModule,
    FeaturesEventsModule,
  ],
  exports: [RouterModule],
})
export class FeaturesDetailRoutingModule {}
