import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesContactComponent } from './pages-contact.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [PagesContactComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
  ]
})
export class PagesContactModule { }
