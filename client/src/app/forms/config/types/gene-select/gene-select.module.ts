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

const configOption: ConfigOption = {
  types: [
    {
      name: 'gene-select',
      component: GeneSelectType,
    },
    {
      name: 'gene-select-item',
      extends: 'gene-select',
      wrappers: ['form-field']
    },
    {
      name: 'gene-select-tag',
      extends: 'gene-select',
      wrappers: ['field-tag']
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
    CvcFieldTagWrapperModule,
    CvcGeneTagModule,
  ]
})
export class CvcGeneSelectModule { }
