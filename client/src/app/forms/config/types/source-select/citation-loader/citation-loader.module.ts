import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CitationLoaderComponent } from './citation-loader.component';

@NgModule({
  declarations: [CitationLoaderComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    NzAlertModule,
    NzFormModule,
    CvcFormErrorsAlertModule,
    NzButtonModule,
  ],
  exports: [CitationLoaderComponent],
})
export class CvcCitationLoaderModule {}
