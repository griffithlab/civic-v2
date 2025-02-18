import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { VariantsReviseRoutingModule } from './variants-revise-routing.module'
import { VariantsReviseView } from './variants-revise.view'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
  declarations: [VariantsReviseView],
  imports: [
    CommonModule,
    VariantsReviseRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    LetDirective,
    PushPipe,
    NzGridModule,
  ],
})
export class VariantsReviseModule {}
