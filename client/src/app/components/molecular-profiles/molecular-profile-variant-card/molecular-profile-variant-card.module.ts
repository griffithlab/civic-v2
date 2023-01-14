import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcMolecularProfileVariantCardComponent } from './molecular-profile-variant-card.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcMolecularProfileTagModule } from '../molecular-profile-tag/molecular-profile-tag.module';
import { RouterModule } from '@angular/router';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CvcCoordinatesCardModule } from '@app/components/variants/coordinates-card/coordinates-card.module';

@NgModule({
  declarations: [CvcMolecularProfileVariantCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzIconModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzCardModule,
    NzCollapseModule,
    CvcPipesModule,
    CvcVariantTagModule,
    CvcGeneTagModule,
    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcVariantTypeTagModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcMolecularProfileTagModule,
    CvcCoordinatesCardModule,
  ],
  exports: [CvcMolecularProfileVariantCardComponent],
})
export class CvcMolecularProfileVariantCardModule {}
