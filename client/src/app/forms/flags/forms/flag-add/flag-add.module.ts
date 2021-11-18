import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFlagAddForm } from './flag-add.form';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CvcFlagAddForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzAlertModule,
    NzToolTipModule,
    FormlyModule.forChild(),
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
  ],
  exports: [CvcFlagAddForm]
})
export class CvcFlagAddModule { }
