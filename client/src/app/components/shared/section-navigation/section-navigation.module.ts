import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionNavigationComponent } from './section-navigation.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [SectionNavigationComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzBreadCrumbModule
  ],
  exports: [SectionNavigationComponent]
})
export class SectionNavigationModule { }
