import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { TypeaheadSelectorComponent } from './types/typeahead-selector/typeahead-selector.type';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NgxMaskModule } from 'ngx-mask';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcOrgSelectorBtnGroupModule } from './shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFormErrorsAlertModule } from './shared/components/form-errors-alert/form-errors-alert.module';
import { CvcFormButtonsModule } from './shared/components/form-buttons/form-buttons.module';
import { CommentTextareaModule } from './types/comment-textarea/comment-textarea.module';
import { MultiFieldModule } from './types/multi-field/multi-field.module';
import { SourceLoaderComponent } from './types/source-input/source-loader/source-loader.component';
import { SourceInputModule } from './types/source-input/source-input.module';

@NgModule({
  declarations: [
    TypeaheadSelectorComponent,
    SourceLoaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SourceInputModule,
    MultiFieldModule,
    CommentTextareaModule,
    SourceInputModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    NzIconModule,
    NzButtonModule,
    NzAlertModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzListModule,
    NzSpaceModule,
    NzSelectModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxMaskModule.forChild(),
    NgxJsonViewerModule,
    RouterModule,
    FormlyModule.forChild(),
    FormlyNgZorroAntdModule,
    FormlySelectModule
  ],
  exports: [
    TypeaheadSelectorComponent,
    SourceLoaderComponent,
  ]
})
export class CvcFormsModule { }
