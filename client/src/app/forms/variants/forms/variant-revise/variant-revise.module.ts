import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantReviseForm } from './variant-revise.form';
import { SourceInputModule } from '@app/forms/sources/types/source-input/source-input.module';
import { MultiFieldModule } from '@app/forms/shared/types/multi-field/multi-field.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { VariantReviseService } from './variant-revise.service';

@NgModule({
  declarations: [VariantReviseForm],
  providers: [VariantReviseService],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    FormlyModule.forChild(),
    CvcOrgSelectorBtnGroupModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    MultiFieldModule,
    SourceInputModule,
  ],
  exports: [VariantReviseForm],
})
export class VariantReviseModule { }
