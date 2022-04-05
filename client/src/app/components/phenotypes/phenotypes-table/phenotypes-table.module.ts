import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcPhenotypesTableComponent } from './phenotypes-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcPhenotypeTagModule } from '../phenotype-tag/phenotype-tag.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [CvcPhenotypesTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzCardModule,
    CvcClearableInputFilterModule,
    CvcPhenotypeTagModule,
    CvcLinkTagModule,
  ],
  exports: [CvcPhenotypesTableComponent]
})
export class CvcPhenotypesTableModule { }
