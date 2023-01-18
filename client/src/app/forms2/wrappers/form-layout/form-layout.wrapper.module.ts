import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFormDebugComponentModule } from '@app/forms2/components/form-debug/form-debug.component.module';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcFormLayoutWrapper } from './form-layout.wrapper';

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'form-layout', component: CvcFormLayoutWrapper }],
};

@NgModule({
  declarations: [CvcFormLayoutWrapper],
  imports: [
    CommonModule,
    FormlyModule.forChild(wrapperConfig),

    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTagModule,
    NzTabsModule,
    NzPopoverModule,
    NzListModule,
    NzGridModule,

    CvcOrgSelectorBtnGroupModule,
    CvcFormDebugComponentModule,

    NgxJsonViewerModule, // debug
  ],
  exports: [CvcFormLayoutWrapper],
})
export class CvcFormLayoutWrapperModule {}
