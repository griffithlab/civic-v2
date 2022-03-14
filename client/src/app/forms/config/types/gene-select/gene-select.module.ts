import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneSelectType } from './gene-select.type';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcFieldTagWrapperModule } from '../../wrappers/field-tag/field-tag.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcFormCardModule } from '../../wrappers/form-card/form-card.module';

const configOption: ConfigOption = {
  types: [
    { // gene-select only
      name: 'gene-select',
      component: GeneSelectType,
    },
    { // field-tag wrapper replaces select with gene-tag upon selection
      name: 'gene-select-tag',
      extends: 'gene-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'gene-select-field',
      extends: 'gene-select-tag',
      wrappers: ['field-tag', 'form-field']
    },
    { // select-tag field with cvc-form-card label, validation, helptext
      name: 'gene-select-card',
      extends: 'gene-select-tag',
      wrappers: ['field-tag', 'form-card']
    }
  ]
}

@NgModule({
  declarations: [GeneSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    NzTagModule,
    CvcFieldTagWrapperModule,
    CvcFormCardModule,
  ]
})
export class CvcGeneSelectModule { }
