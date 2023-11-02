import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import {
  CvcClinvarInputField,
  CvcClinvarInputFieldProps,
} from './clinvar-input.type'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'clinvar-input',
      wrappers: ['form-field'],
      component: CvcClinvarInputField,
      defaultOptions: {
        props: <CvcClinvarInputFieldProps>{
          isRepeatItem: false,
          showExistenceOptions: false,
        },
      },
    },
    {
      // for use in repeat-field types
      name: 'clinvar-multi-input',
      wrappers: ['form-field'],
      component: CvcClinvarInputField,
      defaultOptions: {
        props: <CvcClinvarInputFieldProps>{
          isRepeatItem: true,
          showExistenceOptions: true,
        },
      },
    },
  ],
}

@NgModule({
  declarations: [CvcClinvarInputField],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    FormlyModule.forChild(typeConfig),
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzRadioModule,
    NzSelectModule,
    NzToolTipModule,
    CvcPipesModule,
  ],
  exports: [CvcClinvarInputField],
})
export class CvcClinvarInputFieldModule {}
