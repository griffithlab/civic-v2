import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DrugInputType, DrugInputTypeOption } from './drug-input.type';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcFormErrorsAlertModule } from '../../components/form-errors-alert/form-errors-alert.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [DrugInputType],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [DrugInputTypeOption] }),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzInputModule,
    CvcDrugTagModule,
    CvcFormErrorsAlertModule,
    CvcPipesModule
  ],
})
export class CvcDrugInputTypeModule { }
