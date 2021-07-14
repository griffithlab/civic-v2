import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

export const routes: Routes = [
  // see layout-routing module for the rest of the routes
  {
    path: '',
    loadChildren: () => import('@app/layout/layout.module').then(m => m.LayoutModule)
  },
  { path: 'flags', loadChildren: () => import('./views/flags/flags.module').then(m => m.FlagsModule) }
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
