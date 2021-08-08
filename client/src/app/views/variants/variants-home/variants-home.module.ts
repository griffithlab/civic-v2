import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsHomePage } from './variants-home.page';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcVariantsTableModule } from '@app/components/variants/variants-table/variants-table.module';
import { CvcGeneTagModule } from '@app/components/genes/cvc-gene-tag/cvc-gene-tag.module';

@NgModule({
  declarations: [VariantsHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    SectionNavigationModule,
    CvcGeneTagModule,
    CvcVariantsTableModule,
  ],
  exports: [VariantsHomePage]
})
export class VariantsHomeModule { }
