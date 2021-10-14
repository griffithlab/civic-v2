import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceDetailView } from './evidence-detail.view';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RouterModule } from '@angular/router';
import { CvcDetailsNavigationModule } from '@app/components/shared/details-navigation/details-navigation.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [EvidenceDetailView],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcGeneTagModule,
    CvcFlaggableModule,
    CvcDetailsNavigationModule,
    CvcVariantTagModule,
  ]
})
export class EvidenceDetailModule { }
