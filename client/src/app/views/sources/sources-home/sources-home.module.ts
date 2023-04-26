import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SourcesHomePage } from './sources-home.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { LetModule, PushModule } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { RouterModule } from '@angular/router'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [SourcesHomePage],
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    PushModule,

    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpaceModule,

    CvcSectionNavigationModule,
    CvcSourcesTableModule,
    CvcPipesModule,
  ],
  exports: [SourcesHomePage],
})
export class SourcesHomeModule {}
