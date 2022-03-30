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
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';

@NgModule({
  declarations: [AssertionsSummaryPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzSpaceModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcStatusTagModule,
    CvcUserTagModule,
    CvcTagListModule,
    CvcDrugTagModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
  ],
  exports: [AssertionsSummaryPage]
})
export class AssertionsSummaryModule { }
