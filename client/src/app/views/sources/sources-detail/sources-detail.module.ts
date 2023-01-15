import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SourcesDetailView } from './sources-detail.view';

@NgModule({
  declarations: [SourcesDetailView],
  imports: [
    CommonModule,
    RouterModule,
    LetModule, PushModule,

    NzPageHeaderModule,
    NzButtonModule,
    NzIconModule,

    CvcSectionNavigationModule,
    CvcLinkTagModule,
    CvcTabNavigationModule,
    CvcPipesModule,
  ],
  exports: [SourcesDetailView],
})
export class SourcesDetailModule {}
