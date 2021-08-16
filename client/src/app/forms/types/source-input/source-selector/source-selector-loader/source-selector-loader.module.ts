import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SourceSelectorLoaderComponent } from './source-selector-loader.component';

@NgModule({
  declarations: [SourceSelectorLoaderComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    NzAlertModule,
    NzFormModule,
    CvcFormErrorsAlertModule,
    NzButtonModule,
  ],
  exports: [SourceSelectorLoaderComponent]
})
export class SourceSelectorLoaderModule { }
