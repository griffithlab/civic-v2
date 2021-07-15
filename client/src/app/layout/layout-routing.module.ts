import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@app/layout/layout.component';

const routes: Routes = [
  // Redirects
  { path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },

  // Main Layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Primary Views
      { path: 'assertions', loadChildren: () => import('@app/views/assertions/assertions.module').then(m => m.AssertionsModule) },
      { path: 'comments', loadChildren: () => import('@app/views/comments/comments.module').then(m => m.CommentsModule) },
      { path: 'community', loadChildren: () => import('@app/views/community/community.module').then(m => m.CommunityModule) },
      { path: 'diseases', loadChildren: () => import('@app/views/diseases/diseases.module').then(m => m.DiseasesModule) },
      { path: 'evidence', loadChildren: () => import('@app/views/evidence/evidence.module').then(m => m.EvidenceModule) },
      { path: 'flags', loadChildren: () => import('@app/views/flags/flags.module').then(m => m.FlagsModule) },
      { path: 'genes', loadChildren: () => import('@app/views/genes/genes.module').then(m => m.GenesModule) },
      { path: 'organizations', loadChildren: () => import('@app/views/organizations/organizations.module').then(m => m.OrganizationsModule)},
      { path: 'phenotypes', loadChildren: () => import('@app/views/phenotypes/phenotypes.module').then(m => m.PhenotypesModule) },
      { path: 'revisions', loadChildren: () => import('@app/views/revisions/revisions.module').then(m => m.RevisionsModule) },
      { path: 'sources', loadChildren: () => import('@app/views/sources/sources.module').then(m => m.SourcesModule) },
      { path: 'users', loadChildren: () => import('@app/views/users/users.module').then(m => m.UsersModule)},
      { path: 'variant-groups', loadChildren: () => import('@app/views/variant-groups/variant-groups.module').then(m => m.VariantGroupsModule) },
      { path: 'variants', loadChildren: () => import('@app/views/variants/variants.module').then(m => m.VariantsModule) },
      { path: 'variant-types', loadChildren: () => import('@app/views/variant-types/variant-types.module').then(m => m.VariantTypesModule) },

      // Other App Views
      { path: 'welcome', loadChildren: () => import('@app/views/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'statistics', loadChildren: () => import('@app/views/statistics/statistics.module').then(m => m.StatisticsModule) },
      { path: 'releases', loadChildren: () => import('@app/views/releases/releases.module').then(m => m.ReleasesModule) },
      { path: 'pages', loadChildren: () => import('@app/views/pages/pages.module').then(m => m.PagesModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
