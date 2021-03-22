import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // Primary Views
  { path: 'assertions', loadChildren: () => import('./views/assertions/assertions.module').then(m => m.AssertionsModule) },
  { path: 'diseases', loadChildren: () => import('./views/diseases/diseases.module').then(m => m.DiseasesModule) },
  { path: 'evidence', loadChildren: () => import('./views/evidence/evidence.module').then(m => m.EvidenceModule) },
  { path: 'genes', loadChildren: () => import('./views/genes/genes.module') .then(m => m.GenesModule) },
  { path: 'sources', loadChildren: () => import('./views/sources/sources.module').then(m => m.SourcesModule) },
  { path: 'variant-groups', loadChildren: () => import('./views/variant-groups/variant-groups.module').then(m => m.VariantGroupsModule) },
  { path: 'variants', loadChildren: () => import('./views/variants/variants.module').then(m => m.VariantsModule) },

  // Other App Views
  { path: 'welcome', loadChildren: () => import('./views/welcome/welcome.module') .then(m => m.WelcomeModule) },

  // Redirects
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
