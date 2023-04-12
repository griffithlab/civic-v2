import { CommonModule } from '@angular/common';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcSearchRulesTypeModule } from '../config/types/search-rules-input/search-rules-input.module';
import { GeneSearchForm } from './gene-search.form';
import { CvcGeneSearchConditionInputTypeModule } from '../config/types/gene-search-condition-input/gene-search-condition-input.module';
import { CvcGenesTableModule } from '@app/components/genes/genes-table/genes-table.module';
import { LetModule, PushModule } from '@ngrx/component';

@NgModule({
  declarations: [GeneSearchForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    FormlyModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcFormInfoWrapperModule,
    CvcFormContainerWrapperModule,
    NzCardModule,
    NzSpaceModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    PushModule,
    LetModule,
    CvcGeneSearchConditionInputTypeModule,
    CvcSearchRulesTypeModule,
    CvcGenesTableModule
  ],
  exports: [GeneSearchForm]
})
export class GeneSearchFormModule { }
