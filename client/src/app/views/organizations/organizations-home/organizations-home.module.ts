import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'

import { OrganizationsHomePage } from './organizations-home.page'
import { CvcOrganizationsTableModule } from '@app/components/organizations/organizations-table/organizations-table.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcOrganizationLeaderboardsModule } from '@app/components/organizations/organization-leaderboards/organization-leaderboards.module'

@NgModule({
  declarations: [OrganizationsHomePage],
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
    CvcOrganizationLeaderboardsModule,
    CvcOrganizationsTableModule,
  ],
})
export class OrganizationsHomeModule {}
