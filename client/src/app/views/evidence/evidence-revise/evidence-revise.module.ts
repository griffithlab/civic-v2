import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceReviseRoutingModule } from './evidence-revise-routing.module';
import { EvidenceReviseView } from './evidence-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [EvidenceReviseView],
  imports: [
    CommonModule,
    EvidenceReviseRoutingModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcSectionNavigationModule,
  ]
})
export class EvidenceReviseModule { }
