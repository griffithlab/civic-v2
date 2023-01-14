import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTabNavigationComponent } from './tab-navigation.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [CvcTabNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTabsModule,
    NzGridModule,
    NzIconModule,
    NzBadgeModule,
    ReactiveComponentModule,
  ],
  exports: [CvcTabNavigationComponent],
})
export class CvcTabNavigationModule {}
