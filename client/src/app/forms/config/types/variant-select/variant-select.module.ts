import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantSelectType } from './variant-select.type';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcFormErrorsAlertModule } from '../../components/form-errors-alert/form-errors-alert.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';

const configOption: ConfigOption = {
  types: [
    { // variant-select only
      name: 'variant-select',
      component: VariantSelectType,
    },
    { // field-tag wrapper replaces select with variant-tag upon selection
      name: 'variant-select-tag',
      extends: 'variant-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'variant-select-field',
      extends: 'variant-select-tag',
      wrappers: ['form-field', 'field-tag']
    },
    { // select-tag card with cvc-form-card label, validation, helptext
      name: 'variant-select-card',
      extends: 'variant-select-tag',
      wrappers: ['form-card', 'field-tag']
    }
  ]
}

@NgModule({
  declarations: [VariantSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzTypographyModule,
    NzButtonModule,
    NzIconModule,
    NzAlertModule,
    CvcFormErrorsAlertModule
  ]
})
export class CvcVariantSelectTypeModule { }
