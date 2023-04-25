import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcClearableInputFilterComponent } from './clearable-input-filter.component'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'

@NgModule({
  declarations: [CvcClearableInputFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ],
  exports: [CvcClearableInputFilterComponent],
})
export class CvcClearableInputFilterModule {}
