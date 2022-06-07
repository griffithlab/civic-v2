import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcFieldErrorsWrapper } from '@app/forms/config/wrappers/field-errors/field-errors.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { SearchRulesType, SearchRulesTypeOption } from './search-rules-input.type';

@NgModule({
  declarations: [SearchRulesType],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild({ types: [SearchRulesTypeOption] }),
    ReactiveFormsModule,
    CvcFieldErrorsWrapper,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NgxJsonViewerModule,
    NzTagModule
  ],
})
export class CvcSearchRulesTypeModule { }
