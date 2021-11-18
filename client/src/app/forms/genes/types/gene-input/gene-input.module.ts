import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneInputComponent, GeneInputType } from './gene-input.type';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';

const formlyConfig = {
  types: [GeneInputType],
};

@NgModule({
  declarations: [ GeneInputComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcGeneTagModule,
  ]
})
export class GeneInputModule { }
