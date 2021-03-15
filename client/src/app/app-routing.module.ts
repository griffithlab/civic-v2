import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // Primary Views
  { path: 'assertions', loadChildren: () => import('./pages/assertions/assertions.module').then(m => m.AssertionsModule) },
  { path: 'diseases', loadChildren: () => import('./pages/diseases/diseases.module').then(m => m.DiseasesModule) },
  { path: 'evidence', loadChildren: () => import('./pages/evidence/evidence.module').then(m => m.EvidenceModule) },
  { path: 'genes', loadChildren: () => import('./pages/genes/genes.module') .then(m => m.GenesModule) },
  { path: 'sources', loadChildren: () => import('./pages/sources/sources.module').then(m => m.SourcesModule) },
  { path: 'variant-groups', loadChildren: () => import('./pages/variant-groups/variant-groups.module').then(m => m.VariantGroupsModule) },
  { path: 'variants', loadChildren: () => import('./pages/variants/variants.module').then(m => m.VariantsModule) },

  // Other App Views
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module') .then(m => m.WelcomeModule) },

  // Redirects
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
