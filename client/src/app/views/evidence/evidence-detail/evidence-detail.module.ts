import { CommonModule } from '@angular/common';
import { EvidenceDetailView } from './evidence-detail.view';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EvidenceDetailRoutingModule } from './evidence-detail-routing.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';
import { CvcRevertEntityButtonModule } from '@app/components/shared/revert-entity-button/revert-entity-button.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcModerateEntityButtonsModule } from '@app/components/shared/moderate-entity-buttons/moderate-entity-button.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EvidenceDetailView],
  imports: [
    CommonModule,
    EvidenceDetailRoutingModule,
    LetModule, PushModule,

    NzAlertModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzTagModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTypographyModule,

    CvcSectionNavigationModule,
    CvcFlaggableModule,
    CvcEntitySubscriptionButtonModule,
    CvcFlaggableModule,
    CvcModerateEntityButtonsModule,
    CvcPipesModule,
    CvcRevertEntityButtonModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
    CvcContributorAvatarsModule,
    CvcMolecularProfileTagModule,
  ],
})
export class EvidenceDetailModule {}
