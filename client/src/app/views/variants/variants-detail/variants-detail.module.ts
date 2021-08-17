import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsDetailView } from './variants-detail.component';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { RouterModule } from '@angular/router';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcDetailsNavigationModule } from '@app/components/shared/details-navigation/details-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [VariantsDetailView],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcFlaggableModule,
    CvcGeneTagModule,
    CvcDetailsNavigationModule,
  ],
  exports: [VariantsDetailView],
})
export class VariantsDetailModule { }
