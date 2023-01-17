import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetModule, PushModule } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { VariantGroupsAddRoutingModule } from './variant-groups-add-routing.module'
import { VariantGroupsAddView } from './variant-groups-add.view'

@NgModule({
  declarations: [VariantGroupsAddView],
  imports: [
    CommonModule,
    VariantGroupsAddRoutingModule,
    LetModule,
    PushModule,
    NzGridModule,
    NzIconModule,
    NzPageHeaderModule,
    CvcLoginPromptModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
  ],
})
export class VariantGroupsAddModule {}
