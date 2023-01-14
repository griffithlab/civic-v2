import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormlyModule } from '@ngx-formly/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcFormInfoCardModule } from '../../components/form-info-card/form-info-card.module';
import {
  CvcFormInfoWrapper,
  CvcFormInfoWrapperOption,
} from './form-info.wrapper';

@NgModule({
  declarations: [CvcFormInfoWrapper],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ wrappers: [CvcFormInfoWrapperOption] }),
    NzGridModule,
    NzCardModule,
    NzCollapseModule,
    CvcFormInfoCardModule,
    NgxJsonViewerModule,
  ],
  exports: [CvcFormInfoWrapper],
})
export class CvcFormInfoWrapperModule {}
