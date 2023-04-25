import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { TherapiesHomePage } from './therapies-home.page'
import { CvcTherapiesTableModule } from '@app/components/therapies/therapies-table/therapies-table.module'

@NgModule({
  declarations: [TherapiesHomePage],
  imports: [
    CommonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzGridModule,
    NzTypographyModule,
    NzSpaceModule,
    NzButtonModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcTherapiesTableModule,
  ],
  exports: [TherapiesHomePage],
})
export class TherapiesHomeModule {}
