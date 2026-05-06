import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NoStateFormOptions } from '@app/forms/states/base.state'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import {
  noStateFormsFieldConfig,
  noStateFormsModel,
} from '../layout-forms.config'

@Component({
    selector: 'cvc-vertical-form',
    templateUrl: './vertical-form.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class VerticalFormPage implements OnInit {
  model: any
  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  constructor() {
    this.model = noStateFormsModel
    this.formLayout = 'vertical'
    this.options = { formState: { formLayout: this.formLayout } }

    this.fields = [
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          formCardOptions: { title: 'Vertical Field Layout, No State' },
        },
        fieldGroup: noStateFormsFieldConfig,
      },
    ]
  }

  ngOnInit(): void {}
}
