import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantTypesDetailComponent } from './variant-types-detail.component'
import { RouterModule } from '@angular/router'
import { LetModule, PushModule } from '@ngrx/component'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [VariantTypesDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    PushModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcPipesModule,
    CvcLinkTagModule,
    CvcSectionNavigationModule,
  ],
})
export class VariantTypesDetailModule {}
