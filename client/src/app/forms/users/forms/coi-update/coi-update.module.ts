import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcCoiUpdateForm } from './coi-update.form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CvcCoiUpdateForm],
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NzCardModule,
    NzAlertModule,
    NzRadioModule,
    NzButtonModule,
    NzSpinModule,
    CvcFormErrorsAlertModule
  ],
  exports: [CvcCoiUpdateForm]
})
export class CvcCoiUpdateModule {}