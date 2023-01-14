import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcUserCardComponent } from './user-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcUserAvatarModule } from '../user-avatar/user-avatar.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { CvcUserTagModule } from '../user-tag/user-tag.module';

@NgModule({
  declarations: [CvcUserCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzIconModule,
    NzSpaceModule,
    NzGridModule,
    NzDividerModule,
    CvcUserAvatarModule,
    CvcLinkTagModule,
    CvcPipesModule,
    CvcOrganizationTagModule,
    CvcUserTagModule,
  ],
  exports: [CvcUserCardComponent],
})
export class CvcUserCardModule {}
