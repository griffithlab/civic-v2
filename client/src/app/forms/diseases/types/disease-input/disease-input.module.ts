import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DiseaseInputComponent, DiseaseInputType } from './disease-input.type';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';

const formlyConfig = {
  types: [DiseaseInputType],
};

@NgModule({
  declarations: [DiseaseInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
    CvcDiseaseTagModule,
  ],
})
export class DiseaseInputModule {}
