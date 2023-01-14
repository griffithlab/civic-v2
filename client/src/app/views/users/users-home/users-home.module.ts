import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcUsersTableModule } from '@app/components/users/users-table/users-table.module';
import { UsersHomePage } from './users-home.page';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [UsersHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcSectionNavigationModule,
    CvcUsersTableModule,
    CvcPipesModule,
  ],
  exports: [UsersHomePage],
})
export class UsersHomeModule {}
