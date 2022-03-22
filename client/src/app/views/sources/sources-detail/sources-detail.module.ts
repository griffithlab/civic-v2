import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SourcesDetailComponent } from './sources-detail.component';

@NgModule({
  declarations: [SourcesDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzPageHeaderModule,
    CvcSectionNavigationModule,
    CvcLinkTagModule,
  ],
  exports: [SourcesDetailComponent]
})
export class SourcesDetailModule { }
