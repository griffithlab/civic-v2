import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClinicalTrialsDetailComponent } from './clinical-trials-detail.component'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { RouterModule } from '@angular/router'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [ClinicalTrialsDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,

    NzPageHeaderModule,
    NzIconModule,

    CvcLinkTagModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ],
})
export class ClinicalTrialsDetailModule {}
