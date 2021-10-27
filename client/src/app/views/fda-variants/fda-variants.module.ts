import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FdaVariantsRoutingModule } from './fda-variants-routing.module';
import { FdaVariantsView } from './fda-variants.view';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';


@NgModule({
  declarations: [FdaVariantsView],
  imports: [
    CommonModule,
    FormsModule,
    FdaVariantsRoutingModule,
    NzFormModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule
  ],
  exports: [FdaVariantsView]
})
export class FdaVariantsModule { }
