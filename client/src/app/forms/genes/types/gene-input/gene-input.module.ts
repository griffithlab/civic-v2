import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneInputComponent, GeneInputType } from './gene-input.type';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

const formlyConfig = {
  types: [GeneInputType],
};

@NgModule({
  declarations: [ GeneInputComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
    CvcGeneTagModule,
  ]
})
export class GeneInputModule { }
