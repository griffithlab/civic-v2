import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantTypesRoutingModule } from './variant-types-routing.module';
import { VariantTypesComponent } from './variant-types.component';
import { VariantTypesDetailComponent } from './variant-types-detail/variant-types-detail.component';
import { VariantTypesSummaryComponent } from './variant-types-summary/variant-types-summary.component';
import { VariantTypesBrowseComponent } from './variant-types-browse/variant-types-browse.component';

import { IconsProviderModule } from '@app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { VariantTypesHomeModule } from './variant-types-home/variant-types-home.module';
import { CvcVariantsTableModule } from '@app/components/variants/variants-table/variants-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [VariantTypesComponent, VariantTypesDetailComponent, VariantTypesSummaryComponent, VariantTypesBrowseComponent],
  imports: [
    CommonModule,
    VariantTypesHomeModule,
    CvcVariantsTableModule,
    CvcEntityTableCardModule,
    NzIconModule,
    SectionNavigationModule,
    VariantTypesRoutingModule,
    IconsProviderModule,
    NzTableModule,
    SharedComponentsModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule
  ]
})
export class VariantTypesModule { }
