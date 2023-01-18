import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NoStateFormOptions } from '@app/forms2/states/base.state'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import {
  noStateFormsFieldConfig,
  noStateFormsModel,
} from '../no-state-forms.config'

@Component({
  selector: 'cvc-inline-form',
  templateUrl: './inline-form.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineFormPage implements OnInit {
  model: any
  options: NoStateFormOptions
  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[]
  formLayout: NzFormLayoutType

  constructor() {
    this.model = noStateFormsModel
    this.formLayout = 'inline'
    this.options = { formState: { formLayout: this.formLayout } }

    this.fields = [
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          title: 'Inline Field Layout, No State',
        },
        fieldGroup: noStateFormsFieldConfig,
      },
    ]
  }

  ngOnInit(): void {}
}
