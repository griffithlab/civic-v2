import { Routes } from '@angular/router'

/**
 * Replaced by `dev-routes.prod.ts` in the production build (fileReplacements
 * in angular.json), so the dynamic import below never reaches the production
 * graph. An `environment.production ? [] : [route]` guard isn't enough:
 * esbuild still emits a chunk for an `import()` in a branch it drops.
 */
export const devRoutes: Routes = [
  {
    path: 'test/forms',
    loadChildren: () =>
      import('./test-pages.routes').then((m) => m.testPagesRoutes),
    data: { breadcrumb: 'Form Test Pages' },
  },
]
