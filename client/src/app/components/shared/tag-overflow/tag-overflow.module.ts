import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTagOverflowComponent } from './tag-overflow.component';
import { CvcTagListModule } from '../tag-list/tag-list.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';

@NgModule({
  declarations: [CvcTagOverflowComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzPopoverModule,
    CvcTagListModule,
    CvcDrugTagModule,
    CvcDiseaseTagModule,
    CvcOrganizationTagModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
  ],
  exports: [CvcTagOverflowComponent]
})
export class CvcTagOverflowModule { }