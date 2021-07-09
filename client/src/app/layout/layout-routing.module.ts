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
      { path: 'diseases', loadChildren: () => import('@app/views/diseases/diseases.module').then(m => m.DiseasesModule) },
      { path: 'evidence', loadChildren: () => import('@app/views/evidence/evidence.module').then(m => m.EvidenceModule) },
      { path: 'genes', loadChildren: () => import('@app/views/genes/genes.module').then(m => m.GenesModule) },
      { path: 'sources', loadChildren: () => import('@app/views/sources/sources.module').then(m => m.SourcesModule) },
      { path: 'variant-groups', loadChildren: () => import('@app/views/variant-groups/variant-groups.module').then(m => m.VariantGroupsModule) },
      { path: 'variants', loadChildren: () => import('@app/views/variants/variants.module').then(m => m.VariantsModule) },
      { path: 'organizations', loadChildren: () => import('@app/views/organizations/organizations.module').then(m => m.OrganizationsModule)},
      { path: 'users', loadChildren: () => import('@app/views/users/users.module').then(m => m.UsersModule)},

      // Other App Views
      { path: 'welcome', loadChildren: () => import('@app/views/welcome/welcome.module').then(m => m.WelcomeModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
