import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFormButtonsModule } from '@app/forms/components/form-buttons/form-buttons.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  SearchButtonType,
  SearchButtonTypeOption,
} from '@app/forms/types/search-button/search-button.type'

@NgModule({
  declarations: [SearchButtonType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ types: [SearchButtonTypeOption] }),
    NzButtonModule,
    CvcFormButtonsModule,
  ],
  exports: [SearchButtonType],
})
export class CvcSearchButtonTypeModule {}
