import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFormFooterWrapper } from './form-footer.wrapper';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'form-footer', component: CvcFormFooterWrapper}],
};

@NgModule({
  declarations: [CvcFormFooterWrapper],
  imports: [
    CommonModule,
    NzGridModule,
    FormlyModule.forChild(wrapperConfig)],
  exports: [CvcFormFooterWrapper],
})
export class CvcFormFooterWrapperModule {}
