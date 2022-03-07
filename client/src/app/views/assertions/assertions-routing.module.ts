import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertionsHomeModule } from './assertions-home/assertions-home.module';
import { AssertionsHomePage } from './assertions-home/assertions-home.page';
import { AssertionsView } from './assertions.view';

const routes: Routes = [
  {
    path: '',
    component: AssertionsView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: AssertionsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: 'add',
        loadChildren: () =>
          import('@app/views/assertions/assertion-add/assertion-add.module').then(
            (m) => m.AssertionAddModule
          ),
        data: { breadcrumb: 'Add' }
      },
      {
        path: ':assertionId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@app/views/assertions/assertions-detail/assertions-detail.module').then(
                (m) => m.AssertionsDetailModule
              ),
          },
          // {
          //   path: 'revise',
          //   loadChildren: () =>
          //     import('@app/views/assertions/assertions-revise/assertions-revise.module').then(
          //       (m) => m.AssertionsReviseModule
          //     ),
          //   data: { breadcrumb: 'Revise' }
          // },
        ]
      },

    ]
  },
  { path: 'revise', loadChildren: () => import('./assertion-add/assertion-add.module').then(m => m.AssertionAddModule) }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AssertionsHomeModule
  ],
  exports: [RouterModule]
})
export class AssertionsRoutingModule { }
