import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AdvancedSearchView } from './advanced-search.view';
import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { GeneSearchFormModule } from '@app/forms/gene-search/gene-search.module';
import { LetModule, PushModule } from '@ngrx/component';


@NgModule({
  declarations: [
    AdvancedSearchView
  ],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    AdvancedSearchRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzGridModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
    GeneSearchFormModule,
  ]
})
export class AdvancedSearchModule { }
