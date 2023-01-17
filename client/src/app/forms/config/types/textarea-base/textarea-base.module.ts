import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { texareaBaseTypeOption, TextareaBaseType } from './textarea-base.type'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { NzInputModule } from 'ng-zorro-antd/input'

@NgModule({
  declarations: [TextareaBaseType],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ types: [texareaBaseTypeOption] }),
    NzInputModule,
  ],
})
export class CvcTextareaBaseTypeModule {}
