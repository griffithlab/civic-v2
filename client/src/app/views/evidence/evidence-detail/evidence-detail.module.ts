import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';
import { CvcModerateEntityButtonsModule } from '@app/components/shared/moderate-entity-buttons/moderate-entity-button.module';
import { CvcRevertEntityButtonModule } from '@app/components/shared/revert-entity-button/revert-entity-button.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { EvidenceDetailRoutingModule } from './evidence-detail-routing.module';
import { EvidenceDetailView } from './evidence-detail.view';

@NgModule({
  declarations: [EvidenceDetailView],
  imports: [
    CommonModule,
    EvidenceDetailRoutingModule,
    ReactiveComponentModule,

    NzAlertModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,

    CvcContributorAvatarsModule,
    CvcEntitySubscriptionButtonModule,
    CvcFlaggableModule,
    CvcGeneTagModule,
    CvcModerateEntityButtonsModule,
    CvcPipesModule,
    CvcRevertEntityButtonModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
    CvcVariantTagModule,
  ]
})
export class EvidenceDetailModule { }
