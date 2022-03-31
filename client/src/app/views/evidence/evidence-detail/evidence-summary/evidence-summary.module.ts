import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceSummaryPage } from './evidence-summary.page';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcEvidenceRatingModule } from '@app/components/evidence/evidence-rating/evidence-rating.module';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';

@NgModule({
  declarations: [EvidenceSummaryPage],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcEvidenceRatingModule,
    CvcDiseaseTagModule,
    CvcStatusTagModule,
    CvcTagListModule,
    CvcUserTagModule,
    CvcClinicalTrialTagModule,
    CvcSourceTagModule,
    CvcPhenotypeTagModule,
    CvcDrugTagModule,
    CvcAssertionsTableModule,
    CvcEntityTableCardModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
  ]
})
export class EvidenceSummaryModule { }
