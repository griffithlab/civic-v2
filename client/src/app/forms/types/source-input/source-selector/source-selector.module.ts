import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceSelectorForm } from './source-selector.form';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [SourceSelectorForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyNgZorroAntdModule,
    NzButtonModule,
  ],
  exports: [SourceSelectorForm]
})
export class SourceSelectorModule { }
