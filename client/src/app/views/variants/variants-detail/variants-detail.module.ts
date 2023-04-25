import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module'
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { VariantDeprecateFormModule } from '@app/forms/variant-deprecate/variant-deprecate.module'
import { LetModule, PushModule } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { VariantsDetailRoutingModule } from './variants-detail-routing.module'
import { VariantsDetailView } from './variants-detail.view'

@NgModule({
  declarations: [VariantsDetailView],
  imports: [
    CommonModule,
    VariantsDetailRoutingModule,
    LetModule,
    PushModule,

    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzGridModule,
    NzAlertModule,
    NzPopoverModule,

    CvcContributorAvatarsModule,
    CvcTabNavigationModule,
    CvcFlaggableModule,
    CvcGeneTagModule,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule,
    CvcPipesModule,
    CvcCommentBodyModule,
    VariantDeprecateFormModule,
  ],
})
export class VariantsDetailModule {}
