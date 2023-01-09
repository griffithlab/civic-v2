import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcDiseasesTableModule } from '@app/components/diseases/diseases-table/diseases-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DiseasesHomePage } from './diseases-home.page';

@NgModule({
  declarations: [DiseasesHomePage],
  imports: [
    CommonModule,

    NzIconModule,
    NzPageHeaderModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpaceModule,

    CvcSectionNavigationModule,
    CvcDiseasesTableModule,
    CvcPipesModule,
  ],
  exports: [DiseasesHomePage]
})
export class DiseasesHomeModule { }
