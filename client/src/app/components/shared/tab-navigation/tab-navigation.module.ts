import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTabNavigationComponent } from './tab-navigation.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcTabNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTabsModule,
    NzGridModule,
    NzIconModule
  ],
  exports: [CvcTabNavigationComponent]
})
export class CvcTabNavigationModule { }
