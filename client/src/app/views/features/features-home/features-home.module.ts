import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcFeaturesTableModule } from '@app/components/features/features-table/features-table.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { FeaturesHomePage } from './features-home.page'

@NgModule({
  declarations: [FeaturesHomePage],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzGridModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcFeaturesTableModule,
  ],
  exports: [FeaturesHomePage],
})
export class FeaturesHomeModule {}
