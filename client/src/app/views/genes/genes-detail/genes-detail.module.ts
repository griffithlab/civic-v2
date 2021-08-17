import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GenesDetailView } from './genes-detail.view';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcDetailsNavigationModule } from '@app/components/shared/details-navigation/details-navigation.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GenesDetailRoutingModule } from './genes-detail-routing.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';

@NgModule({
  declarations: [GenesDetailView],
  imports: [
    CommonModule,
    GenesDetailRoutingModule,
    ReactiveComponentModule,
    RouterModule,
    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    CvcSectionNavigationModule,
    CvcFlaggableModule,
    CvcDetailsNavigationModule,
  ]
})
export class GenesDetailModule { }
