import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesAboutComponent } from './pages-about/pages-about.component';
import { PagesHelpComponent } from './pages-help/pages-help.component';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    PagesComponent,
    PagesAboutComponent,
    PagesHelpComponent,
    PagesContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzPageHeaderModule,
    NzGridModule,
  ]
})
export class PagesModule { }
