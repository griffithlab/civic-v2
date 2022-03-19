import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneInputType } from './gene-input.type';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

const configOption: ConfigOption = {
  types: [
    {
      name: 'cvc-gene-input',
      component: GeneInputType,
      // wrappers: ['form-field'],
    }
  ]
}

@NgModule({
  declarations: [GeneInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzTypographyModule,
    CvcGeneTagModule,
    CvcPipesModule
  ]
})
export class CvcGeneInputTypeModule { }
