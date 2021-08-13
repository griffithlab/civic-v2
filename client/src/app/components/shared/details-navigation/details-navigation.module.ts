import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDetailsNavigationComponent } from './details-navigation.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcContributorAvatarsModule } from '../contributor-avatars/contributor-avatars.module';

@NgModule({
  declarations: [CvcDetailsNavigationComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzGridModule,
    CvcContributorAvatarsModule
  ],
  exports: [CvcDetailsNavigationComponent]
})
export class CvcDetailsNavigationModule { }
