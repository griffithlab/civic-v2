import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionsSummaryPage } from './assertions-summary.page';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcAttributeTagModule } from '@app/components/shared/attribute-tag/attribute-tag.module';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module';
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module';
import { CvcEmptyValueModule } from '@app/components/shared/empty-value/empty-value.module';

@NgModule({
  declarations: [AssertionsSummaryPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzSpaceModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzDescriptionsModule,
    NzToolTipModule,
    CvcEmptyValueModule,
    CvcPipesModule,
    CvcStatusTagModule,
    CvcUserTagModule,
    CvcTagListModule,
    CvcTherapyTagModule,
    CvcEvidenceTableModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    CvcAttributeTagModule,
    CvcMolecularProfileTagModule,
    CvcMolecularProfileTagNameModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
  ],
  exports: [AssertionsSummaryPage]
})
export class AssertionsSummaryModule { }
