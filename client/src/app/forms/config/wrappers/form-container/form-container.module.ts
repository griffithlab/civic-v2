import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcFormInfoCardModule } from '../../components/form-info-card/form-info-card.module';
import { FormContainerWrapper } from './form-container.wrapper';

const configOption: ConfigOption = {
  wrappers: [
    {
      name: 'form-container',
      component: FormContainerWrapper,
    },
  ],
};

@NgModule({
  declarations: [FormContainerWrapper],
  imports: [
    CommonModule,
    LetModule, PushModule,
    FormlyModule.forChild(configOption),
    NzGridModule,
    NzCardModule,
    NzCollapseModule,
    CvcFormInfoCardModule,
    NgxJsonViewerModule,
  ],
  exports: [FormContainerWrapper],
})
export class CvcFormContainerWrapperModule {}
