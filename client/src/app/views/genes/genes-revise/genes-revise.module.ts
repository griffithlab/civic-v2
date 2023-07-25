import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { GenesReviseRoutingModule } from './genes-revise-routing.module'
import { GenesReviseView } from './genes-revise.view'

@NgModule({
  declarations: [GenesReviseView],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    GenesReviseRoutingModule,

    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,

    CvcLoginPromptModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ],
})
export class GenesReviseModule {}
