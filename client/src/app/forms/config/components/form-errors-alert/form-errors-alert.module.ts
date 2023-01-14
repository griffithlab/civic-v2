import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFormErrorsAlertComponent } from './form-errors-alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [CvcFormErrorsAlertComponent],
  imports: [CommonModule, NzAlertModule],
  exports: [CvcFormErrorsAlertComponent],
})
export class CvcFormErrorsAlertModule {}
