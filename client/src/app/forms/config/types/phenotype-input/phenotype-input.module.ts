import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhenotypeInputType, PhenotypeInputTypeOption } from './phenotype-input.type';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

    // MultiFieldTypeOption,
@NgModule({
  declarations: [PhenotypeInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [PhenotypeInputTypeOption] }),
    NzSelectModule,
    CvcPhenotypeTagModule,
    CvcPipesModule
  ]
})
export class CvcPhenotypeInputTypeModule { }
