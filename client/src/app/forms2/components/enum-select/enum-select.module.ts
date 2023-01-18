import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcEnumSelectComponent } from './enum-select.component';

@NgModule({
  declarations: [
    CvcEnumSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyNzFormFieldModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    CvcPipesModule,
  ],
  exports: [
    CvcEnumSelectComponent
  ]
})
export class CvcEnumSelectModule { }
