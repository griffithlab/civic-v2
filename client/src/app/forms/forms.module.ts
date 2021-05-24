import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { GeneSuggestRevisionFormComponent } from './components/gene-suggest-revision-form/gene-suggest-revision-form.component';
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

import { IconsProviderModule } from '@app/icons-provider.module';

import { CommentTextareaComponent } from './types/comment-textarea/comment-textarea.component';
import { CommentAddFormComponent } from './components/comment-add-form/comment-add-form.component';
import { MultiFieldComponent } from './types/multi-field/multi-field.component';
import { SourceIdInputComponent } from './types/source-id-input/source-id-input.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NgxMaskModule } from 'ngx-mask';
import { SourceInputComponent } from './types/source-input/source-input.component';
import { SourceSelectorComponent } from './components/source-selector/source-selector.component';
import { SourcesComponentsModule } from '@app/components/sources/sources-components.module';


@NgModule({
  declarations: [
    GeneSuggestRevisionFormComponent,
    CommentTextareaComponent,
    CommentAddFormComponent,
    MultiFieldComponent,
    SourceIdInputComponent,
    SourceInputComponent,
    SourceSelectorComponent,
  ],
  imports: [
    FormsModule,
    SharedComponentsModule,
    SourcesComponentsModule,
    ReactiveFormsModule,
    CommonModule,
    IconsProviderModule,
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
  ],
  exports: [
    GeneSuggestRevisionFormComponent,
    CommentTextareaComponent,
    CommentAddFormComponent,
    MultiFieldComponent,
    SourceIdInputComponent,
    SourceInputComponent,
    SourceSelectorComponent,
  ]
})
export class CvcFormsModule { }
