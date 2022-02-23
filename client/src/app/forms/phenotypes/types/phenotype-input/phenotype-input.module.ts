import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhenotypeInputComponent, PhenotypeInputType } from './phenotype-input.type';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [PhenotypeInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule,
    NzSelectModule,
    CvcPhenotypeTagModule,
  ]
})
export class PhenotypeInputModule { }
