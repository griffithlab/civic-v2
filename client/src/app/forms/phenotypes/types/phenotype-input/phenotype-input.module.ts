import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhenotypeInputComponent, PhenotypeInputType } from './phenotype-input.type';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';

const formlyConfig = {
  types: [PhenotypeInputType]
}

@NgModule({
  declarations: [PhenotypeInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
    CvcPhenotypeTagModule,
  ]
})
export class PhenotypeInputModule { }
