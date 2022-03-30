import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesAboutPage } from './pages-about.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [PagesAboutPage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
  ]
})
export class PagesAboutModule { }
