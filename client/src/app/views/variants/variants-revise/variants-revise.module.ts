import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantsReviseRoutingModule } from './variants-revise-routing.module';
import { VariantsReviseView } from './variants-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [VariantsReviseView],
  imports: [
    CommonModule,
    VariantsReviseRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    LetModule, PushModule,
    NzGridModule,
  ],
})
export class VariantsReviseModule {}
