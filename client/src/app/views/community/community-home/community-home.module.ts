import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { CommunityHomePage } from './community-home.page';

@NgModule({
  declarations: [CommunityHomePage],
  imports: [CommonModule, NzPageHeaderModule, NzIconModule, NzGridModule],
  exports: [CommunityHomePage],
})
export class CommunityHomeModule {}
