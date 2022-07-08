import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DiseaseInputType, DiseaseInputTypeOption } from './disease-input.type';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcFormErrorsAlertModule } from '../../components/form-errors-alert/form-errors-alert.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module';

@NgModule({
  declarations: [DiseaseInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [DiseaseInputTypeOption] }),
    NzSelectModule,
    CvcDiseaseTagModule,
    NzTypographyModule,
    NzSpaceModule,
    NzButtonModule,
    CvcFormErrorsAlertModule,
    NzInputModule,
    FormsModule,
    CvcPipesModule,
    CvcAutofocusModule
  ],
})
export class CvcDiseaseInputTypeModule { }
