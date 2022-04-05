import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesContactModule } from './pages-contact/pages-contact.module';
import { PagesAboutModule } from './pages-about/pages-about.module';
import { PagesHelpModule } from './pages-help/pages-help.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PagesContactModule,
    PagesAboutModule,
    PagesHelpModule,
  ]
})
export class PagesModule { }
