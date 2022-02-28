import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DiseaseInputType, DiseaseInputTypeOption } from './disease-input.type';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';

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
    NzSpaceModule
  ],
})
export class CvcDiseaseInputModule { }
