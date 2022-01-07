import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcUsersTableModule } from '@app/components/users/users-table/users-table.module';
import { UsersHomePage } from './users-home.page';

@NgModule({
  declarations: [UsersHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcUsersTableModule,
  ],
  exports: [UsersHomePage]
})
export class UsersHomeModule { }
