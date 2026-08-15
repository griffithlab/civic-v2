import { Routes } from '@angular/router'

/**
 * Replaced by `dev-routes.prod.ts` in the production build (see the
 * fileReplacements array in angular.json), so the dynamic import below is not
 * in the production graph at all.
 *
 * A `...(environment.production ? [] : [route])` guard is NOT sufficient and was
 * measured, not assumed: esbuild still emits a chunk for an `import()` inside a
 * branch it drops, which shipped 7.9 kB of dev bench to production.
 */
export const devRoutes: Routes = [
  {
    path: 'test/forms',
    loadChildren: () =>
      import('./test-pages.routes').then((m) => m.testPagesRoutes),
    data: { breadcrumb: 'Form Test Pages' },
  },
]
