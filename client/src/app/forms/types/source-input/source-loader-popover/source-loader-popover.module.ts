import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceLoaderComponent } from './source-loader-popover.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [SourceLoaderComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    NzAlertModule,
    NzFormModule,
    CvcFormErrorsAlertModule,
    NzButtonModule,
  ],
  exports: [SourceLoaderComponent]
})
export class SourceLoaderModule { }
