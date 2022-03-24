import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [
    PagesComponent,
    PagesContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzPageHeaderModule,
    NzGridModule,
    NzCardModule,
    NzSpaceModule
  ]
})
export class PagesModule { }
