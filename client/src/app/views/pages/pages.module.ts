import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
import { PagesAboutModule } from './pages-about/pages-about.module'
import { PagesHelpModule } from './pages-help/pages-help.module'
import { PagesAiModule } from '@app/views/pages/pages-ai/pages-ai.module'

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PagesAboutModule,
    PagesHelpModule,
    PagesAiModule,
  ],
})
export class PagesModule {}
