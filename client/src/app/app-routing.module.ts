import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  // Main Entity Pages
  {
    path: 'genes',
    loadChildren: () => import('./pages/genes/genes.module')
      .then(m => m.GenesModule)
  },

  // Misc. App Views
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module')
      .then(m => m.WelcomeModule),
  },

  // Redirects
  { // if no route provided, load welcome view
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
