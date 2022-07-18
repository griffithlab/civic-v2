import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module';
import { CvcPlainTagOverflowModule } from '@app/components/shared/plain-tag-overflow/plain-tag-overflow.module';
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcMolecularProfileTagModule } from '../molecular-profile-tag/molecular-profile-tag.module';
import { CvcMolecularProfilesTableComponent } from './molecular-profile-table.component';

@NgModule({
  declarations: [CvcMolecularProfilesTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,

    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,

    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcGeneTagModule,
    CvcNoMoreRowsModule,
    CvcPipesModule,
    CvcPlainTagOverflowModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcTagOverflowModule,
    CvcVariantTagModule,
    CvcMolecularProfileTagModule,
    CvcPlainTagOverflowModule
  ],
  exports: [CvcMolecularProfilesTableComponent]
})
export class CvcMolecularProfilesTableModule { }
