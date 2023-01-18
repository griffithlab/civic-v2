import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEnumSelectModule } from '@app/forms2/components/enum-select/enum-select.module'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzRateModule } from 'ng-zorro-antd/rate'
import { CvcRatingField } from './rating.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'rating',
      wrappers: ['form-field'],
      component: CvcRatingField,
    },
  ],
}

@NgModule({
  declarations: [CvcRatingField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormsModule,
    FormlyModule.forChild(typeConfig),
    NzRateModule,
    CvcPipesModule,
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
  ],
  exports: [CvcRatingField],
})
export class CvcRatingModule {}
