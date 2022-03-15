import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FieldListType } from './field-list.type';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

const configOption: ConfigOption = {
  types: [
    {
      name: 'field-list',
      component: FieldListType,
    }
  ]
}

@NgModule({
  declarations: [FieldListType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(configOption),
    NzButtonModule,
    NzIconModule,
  ]
})
export class CvcFieldListTypeModule { }
