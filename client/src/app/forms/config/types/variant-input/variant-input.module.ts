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
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

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
    NzSpaceModule,
    NzTypographyModule,
    NzEmptyModule,
    CvcVariantTagModule,
    CvcFormErrorsAlertModule,
    CvcPipesModule,
    CvcAutofocusModule,
  ],
  exports: [VariantInputType],
})
export class CvcVariantInputTypeModule {}
