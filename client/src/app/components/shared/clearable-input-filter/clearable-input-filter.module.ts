import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcClearableInputFilterComponent } from './clearable-input-filter.component';
import { NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CvcClearableInputFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
  ],
  exports: [CvcClearableInputFilterComponent]
})
export class CvcClearableInputFilterModule { }
