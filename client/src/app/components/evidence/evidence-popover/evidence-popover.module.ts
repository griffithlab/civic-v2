import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEvidencePopoverComponent } from './evidence-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module';

@NgModule({
  declarations: [CvcEvidencePopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcTherapyTagModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    CvcSourceTagModule,
    CvcStatusTagModule,
    CvcMolecularProfileTagModule,
    CvcMolecularProfileTagNameModule,
  ],
  exports: [CvcEvidencePopoverComponent],
})
export class CvcEvidencePopoverModule {}
