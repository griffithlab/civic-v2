import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';
import { DiseaseSelectType } from './disease-select.type';

const configOption: ConfigOption = {
  types: [
    { // disease-select only
      name: 'disease-select',
      component: DiseaseSelectType,
    },
    { // field-tag wrapper replaces select with disease-tag upon selection
      name: 'disease-select-tag',
      extends: 'disease-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'disease-select-field',
      extends: 'disease-select-tag',
      wrappers: ['form-field', 'field-tag' ]
    },
    { // select-tag card with cvc-form-card
      name: 'disease-select-card',
      extends: 'disease-select-tag',
      wrappers: ['form-card', 'field-tag']
    }
  ]
}

@NgModule({
  declarations: [DiseaseSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    CvcDiseaseTagModule,
    NzTypographyModule,
    NzSpaceModule
  ],
})
export class CvcDiseaseSelectTypeModule { }
