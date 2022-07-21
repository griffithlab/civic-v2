import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsHomePage } from './drugs-home.page';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcDrugsTableModule } from '@app/components/drugs/drugs-table/drugs-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [DrugsHomePage],
  imports: [
    CommonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzGridModule,
    NzTypographyModule,
    NzSpaceModule,
    NzButtonModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcDrugsTableModule,
  ],
  exports: [DrugsHomePage]
})
export class DrugsHomeModule { }
