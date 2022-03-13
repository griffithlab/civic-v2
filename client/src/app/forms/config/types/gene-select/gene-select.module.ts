import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneSelectType, GeneSelectTypeOption } from './gene-select.type';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [GeneSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [GeneSelectTypeOption] }),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcGeneTagModule,
  ]
})
export class CvcGeneSelectModule { }
