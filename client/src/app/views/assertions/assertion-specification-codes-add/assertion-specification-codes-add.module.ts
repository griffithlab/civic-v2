import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionSpecificationCodesAddRoutingModule } from './assertion-specification-codes-add-routing.module'
import { AssertionSpecificationCodesAddView } from './assertion-specification-codes-add.view'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [AssertionSpecificationCodesAddView],
  imports: [
    CommonModule,
    AssertionSpecificationCodesAddRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ],
})
export class AssertionSpecificationCodesAddModule {}
