import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcPhenotypesTableModule } from '@app/components/phenotypes/phenotypes-table/phenotypes-table.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { PhenotypesHomePage } from './phenotypes-home.page';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [PhenotypesHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcSectionNavigationModule,
    CvcPhenotypesTableModule
  ],
})
export class PhenotypesHomeModule { }
