import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { MolecularProfileDetailRoutingModule } from './molecular-profiles-detail-routing.module'
import { MolecularProfilesDetailView } from './molecular-profiles-detail.view'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { ComplexMolecularProfileDeprecateFormModule } from '@app/forms/components/complex-molecular-profile-deprecate/complex-molecular-profile-deprecate.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'

@NgModule({
  declarations: [MolecularProfilesDetailView],
  imports: [
    CommonModule,
    MolecularProfileDetailRoutingModule,
    LetDirective,
    PushPipe,
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
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule,
    CvcFeatureVariantTagModule,
    CvcPipesModule,
    CvcCommentBodyModule,
    ComplexMolecularProfileDeprecateFormModule,
  ],
})
export class MolecularProfilesDetailModule {}
