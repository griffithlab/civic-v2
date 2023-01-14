import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcPhenotypesTableModule } from '@app/components/phenotypes/phenotypes-table/phenotypes-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PhenotypesHomePage } from './phenotypes-home.page';

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
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcPhenotypesTableModule,
  ],
})
export class PhenotypesHomeModule {}
