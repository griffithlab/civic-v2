import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAssertionPopoverComponent } from './assertion-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module';

@NgModule({
  declarations: [CvcAssertionPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzGridModule,
    NzSpaceModule,
    NzTagModule,
    NzToolTipModule,
    CvcDiseaseTagModule,
    CvcMolecularProfileTagNameModule,
    CvcMolecularProfileTagModule,
    CvcPhenotypeTagModule,
    CvcTherapyTagModule,
    CvcPipesModule,
    CvcStatusTagModule,
    TimeagoModule.forChild({
      formatter: { useClass: CivicTimeagoFormatter, provide: TimeagoFormatter },
    }),
  ],
  exports: [CvcAssertionPopoverComponent],
})
export class CvcAssertionsPopoverModule {}
