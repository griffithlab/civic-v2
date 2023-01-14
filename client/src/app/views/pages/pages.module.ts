import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesAboutModule } from './pages-about/pages-about.module';
import { PagesHelpModule } from './pages-help/pages-help.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PagesAboutModule,
    PagesHelpModule,
  ],
})
export class PagesModule {}
