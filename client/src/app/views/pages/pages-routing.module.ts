import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PagesAboutPage } from './pages-about/pages-about.page'
import { PagesHelpPage } from './pages-help/pages-help.page'
import { PagesComponent } from './pages.component'
import { PagesAiPage } from '@app/views/pages/pages-ai/pages-ai.page'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'about',
        component: PagesAboutPage,
      },
      {
        path: 'help',
        component: PagesHelpPage,
      },
      {
        path: 'ai-integrations',
        component: PagesAiPage,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
