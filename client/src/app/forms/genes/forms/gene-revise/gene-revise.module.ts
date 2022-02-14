import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneReviseForm } from './gene-revise.form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MultiFieldModule } from '@app/forms/shared/types/multi-field/multi-field.module';
import { SourceInputModule } from '@app/forms/sources/types/source-input/source-input.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [GeneReviseForm],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    FormlyModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    MultiFieldModule,
    SourceInputModule,
  ],
  exports: [GeneReviseForm]
})
export class GeneSuggestRevisionFormModule { }
