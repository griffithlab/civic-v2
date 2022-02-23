import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiFieldAddBtnComponent } from './multi-field-add-btn.type';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [MultiFieldAddBtnComponent],
  imports: [
    CommonModule,
    FormlyNgZorroAntdModule,
    NzFormModule,
    NzButtonModule,
  ],
  exports: [MultiFieldAddBtnComponent]
})
export class MultiFieldAddBtnModule { }
