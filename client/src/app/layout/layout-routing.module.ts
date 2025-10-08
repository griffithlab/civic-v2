import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from '@app/layout/layout.component'

const routes: Routes = [
  // Redirects
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },

  // Main Layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('@app/views/search/search.module').then((m) => m.SearchModule),
        data: {
          breadcrumb: 'Search',
        },
      },
      // Primary Views
      {
        path: 'assertions',
        loadChildren: () =>
          import('@app/views/assertions/assertions.module').then(
            (m) => m.AssertionsModule
          ),
        data: {
          breadcrumb: 'Assertions',
        },
      },
      {
        path: 'molecular-profiles',
        loadChildren: () =>
          import(
            '@app/views/molecular-profiles/molecular-profiles.module'
          ).then((m) => m.MolecularProfilesModule),
        data: {
          breadcrumb: 'Molecular Profiles',
        },
      },
      {
        path: 'clinical-trials',
        loadChildren: () =>
          import('@app/views/clinical-trials/clinical-trials.module').then(
            (m) => m.ClinicalTrialsModule
          ),
        data: {
          breadcrumb: 'Clinical Trials',
        },
      },
      {
        path: 'diseases',
        loadChildren: () =>
          import('@app/views/diseases/diseases.module').then(
            (m) => m.DiseasesModule
          ),
        data: {
          breadcrumb: 'Diseases',
        },
      },
      {
        path: 'therapies',
        loadChildren: () =>
          import('@app/views/therapies/therapies.module').then(
            (m) => m.TherapiesModule
          ),
        data: {
          breadcrumb: 'Therapies',
        },
      },
      {
        path: 'evidence',
        loadChildren: () =>
          import('@app/views/evidence/evidence.module').then(
            (m) => m.EvidenceModule
          ),
        data: {
          breadcrumb: 'Evidence',
        },
      },
      {
        path: 'genes',
        redirectTo: 'features',
        data: {
          breadcrumb: 'Features',
        },
      },

      {
        path: 'features',
        loadChildren: () =>
          import('@app/views/features/features.module').then(
            (m) => m.FeaturesModule
          ),
        data: {
          breadcrumb: 'Features',
        },
      },
      {
        path: 'organizations',
        loadChildren: () =>
          import('@app/views/organizations/organizations.module').then(
            (m) => m.OrganizationsModule
          ),
        data: {
          breadcrumb: 'Organizations',
        },
      },
      {
        path: 'phenotypes',
        loadChildren: () =>
          import('@app/views/phenotypes/phenotypes.module').then(
            (m) => m.PhenotypesModule
          ),
        data: {
          breadcrumb: 'Phenotypes',
        },
      },
      {
        path: 'sources',
        loadChildren: () =>
          import('@app/views/sources/sources.module').then(
            (m) => m.SourcesModule
          ),
        data: {
          breadcrumb: 'Sources',
        },
      },
      {
        path: 'curation',
        loadChildren: () =>
          import('@app/views/curation/curation.module').then(
            (m) => m.CurationModule
          ),
        data: {
          breadcrumb: 'Curation',
        },
      },
      {
        path: 'users',
        loadChildren: () =>
          import('@app/views/users/users.module').then((m) => m.UsersModule),
        data: {
          breadcrumb: 'Contributors',
        },
      },
      {
        path: 'variant-groups',
        loadChildren: () =>
          import('@app/views/variant-groups/variant-groups.module').then(
            (m) => m.VariantGroupsModule
          ),
        data: {
          breadcrumb: 'Variant Groups',
        },
      },
      {
        path: 'variants',
        loadChildren: () =>
          import('@app/views/variants/variants.module').then(
            (m) => m.VariantsModule
          ),
        data: {
          breadcrumb: 'Variants',
        },
      },
      {
        path: 'variant-types',
        loadChildren: () =>
          import('@app/views/variant-types/variant-types.module').then(
            (m) => m.VariantTypesModule
          ),
        data: {
          breadcrumb: 'Variant Types',
        },
      },

      // Other App Views
      {
        path: 'welcome',
        loadChildren: () =>
          import('@app/views/welcome/welcome.module').then(
            (m) => m.WelcomeModule
          ),
        data: {
          breadcrumb: 'Welcome to CIViC',
        },
      },
      {
        path: 'releases',
        loadChildren: () =>
          import('@app/views/releases/releases.module').then(
            (m) => m.ReleasesModule
          ),
        data: {
          breadcrumb: 'Releases',
        },
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('@app/views/pages/pages.module').then((m) => m.PagesModule),
        data: {
          breadcrumb: 'Pages',
        },
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('@app/forms/test-pages/test-pages.module').then(
            (m) => m.TestPagesModule
          ),
        data: {
          breadcrumb: 'Forms Dev',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
