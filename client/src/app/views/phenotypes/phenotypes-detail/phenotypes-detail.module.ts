import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { PhenotypesDetailComponent } from './phenotypes-detail.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzSpaceModule } from 'ng-zorro-antd/space'

@NgModule({
  declarations: [PhenotypesDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcLinkTagModule,
    CvcSectionNavigationModule,
  ],
})
export class PhenotypesDetailModule {}
