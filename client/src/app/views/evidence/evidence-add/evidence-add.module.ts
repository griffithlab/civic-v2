import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { EvidenceAddRoutingModule } from './evidence-add-routing.module'
import { EvidenceAddView } from './evidence-add.view'

@NgModule({
  declarations: [EvidenceAddView],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    EvidenceAddRoutingModule,

    NzGridModule,
    NzIconModule,
    NzPageHeaderModule,

    CvcLoginPromptModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ],
})
export class EvidenceAddModule {}
