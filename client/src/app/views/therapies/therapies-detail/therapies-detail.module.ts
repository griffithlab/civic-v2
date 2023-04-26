import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TherapiesDetailComponent } from './therapies-detail.component'
import { RouterModule } from '@angular/router'
import { LetModule, PushModule } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [TherapiesDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    PushModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzTagModule,
    NzToolTipModule,
    CvcLinkTagModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ],
})
export class TherapiesDetailModule {}
