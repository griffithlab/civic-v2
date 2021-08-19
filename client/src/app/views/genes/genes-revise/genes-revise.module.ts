import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesReviseView } from './genes-revise.view';
import { RouterModule } from '@angular/router';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GenesReviseRoutingModule } from './genes-revise-routing.module';

@NgModule({
  declarations: [GenesReviseView],
  imports: [
    CommonModule,
    GenesReviseRoutingModule,
    RouterModule,
    CvcSectionNavigationModule,
    NzPageHeaderModule,
    NzIconModule,
  ]
})
export class GenesReviseModule { }
