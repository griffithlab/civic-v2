import { Routes } from '@angular/router'

/**
 * Dev-only benches for form internals. Reachable only when
 * `environment.production` is false — see layout-routing.module.ts, which is
 * also where the production build's tree-shaking of this import is decided.
 */
export const testPagesRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'selects' },
  {
    path: 'selects',
    loadComponent: () =>
      import('./select-fields-test/select-fields-test.component').then(
        (m) => m.CvcSelectFieldsTestComponent
      ),
    data: { breadcrumb: 'Select Fields' },
  },
]
