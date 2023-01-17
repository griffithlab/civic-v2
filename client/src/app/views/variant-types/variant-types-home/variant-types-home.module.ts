import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantTypesHomePage } from './variant-types-home.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcVariantTypesTableModule } from '@app/components/variant-types/variant-types-table/variant-types-table.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [VariantTypesHomePage],
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
    CvcVariantTypesTableModule,
  ],
  exports: [VariantTypesHomePage],
})
export class VariantTypesHomeModule {}
