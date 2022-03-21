import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsSummaryPage } from './variant-groups-summary.page';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsComponent, NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { CvcVariantsTableModule } from '@app/components/variants/variants-table/variants-table.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [VariantGroupsSummaryPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    CvcEmptyRevisableModule,
    CvcVariantsTableModule,
  ],
  exports: [VariantGroupsSummaryPage],
})
export class VariantGroupsSummaryModule { }
