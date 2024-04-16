import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { VariantDeprecateFormModule } from '@app/forms/components/variant-deprecate/variant-deprecate.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { VariantsDetailRoutingModule } from './variants-detail-routing.module'
import { VariantsDetailView } from './variants-detail.view'

@NgModule({
  declarations: [VariantsDetailView],
  imports: [
    CommonModule,
    VariantsDetailRoutingModule,
    LetDirective,
    PushPipe,

    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzGridModule,
    NzAlertModule,
    NzPopoverModule,
    NzTypographyModule,

    CvcContributorAvatarsModule,
    CvcTabNavigationModule,
    CvcFlaggableModule,
    CvcFeatureTagModule,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule,
    CvcPipesModule,
    CvcCommentBodyModule,
    VariantDeprecateFormModule,
  ],
})
export class VariantsDetailModule {}
