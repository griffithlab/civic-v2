import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantInputType, variantInputTypeOption } from './variant-input.type';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcFormErrorsAlertModule } from '../../components/form-errors-alert/form-errors-alert.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [VariantInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [variantInputTypeOption] }),
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    CvcVariantTagModule,
    CvcFormErrorsAlertModule
  ]
})
export class CvcVariantInputTypeModule { }
