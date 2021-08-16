import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceSelectorComponent } from './source-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [SourceSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyNgZorroAntdModule,
    NzButtonModule,
  ],
  exports: [SourceSelectorComponent]
})
export class SourceSelectorModule { }
