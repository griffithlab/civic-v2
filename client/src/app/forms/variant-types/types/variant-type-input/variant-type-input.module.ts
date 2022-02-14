import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypeInputComponent, VariantTypeInputType } from './variant-type-input.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';

@NgModule({
  declarations: [VariantTypeInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    ReactiveComponentModule,
    NzSelectModule,
    CvcVariantTypeTagModule
  ]
})
export class VariantTypeInputModule { }
