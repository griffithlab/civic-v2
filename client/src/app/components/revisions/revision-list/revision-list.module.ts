import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionListComponent } from './revision-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CvcRevisionValueDiffModule } from '../revision-value-diff/revision-value-diff.module';
import { RevisionListDiffModule } from '../revision-list-diff/revision-list-diff.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TimeagoModule } from 'ngx-timeago';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RevisionListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    NzEmptyModule,
    NzCheckboxModule,
    NzDividerModule,
    NzToolTipModule,
    TimeagoModule.forChild(),
    CvcOrgSelectorBtnGroupModule,
    RevisionListDiffModule,
    CvcSourceTagModule,
    CvcRevisionValueDiffModule,
    CvcUserTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcPhenotypeTagModule,
    CvcVariantTagModule,
    CvcVariantTypeTagModule,
    CvcStatusTagModule,
    NzCollapseModule
  ],
  exports: [RevisionListComponent]
})
export class RevisionListModule { }
