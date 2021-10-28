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
import { FdaVariantsGuard } from './fda-variants.guard';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';


@NgModule({
  declarations: [FdaVariantsView],
  imports: [
    CommonModule,
    FormsModule,
    FdaVariantsRoutingModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    NzModalModule,
    NzMenuModule,
    NzDropDownModule,
    NzTagModule,
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcDiseaseTagModule,
    CvcAssertionsTagModule,
  ],
  providers: [FdaVariantsGuard],
  exports: [FdaVariantsView]
})
export class FdaVariantsModule { }
