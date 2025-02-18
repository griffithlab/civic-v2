import { Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { IndexableObject } from 'ng-zorro-antd/core/types'

type FormCardOptions = {
  title?: string
  size?: 'default' | 'small'
}

export interface CvcFormCardWrapperProps extends FormlyFieldProps {
  formCardOptions?: FormCardOptions
}

const defaultWrapperOptions: FormCardOptions = {
  size: 'default',
}

@Component({
  selector: 'cvc-form-card',
  templateUrl: './form-card.wrapper.html',
  styleUrls: ['./form-card.wrapper.less'],
  standalone: false,
})
export class CvcFormCardWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormCardWrapperProps>>
  implements OnInit
{
  wrapperOptions: FormCardOptions = { ...defaultWrapperOptions }

  get errorState() {
    return this.showError ? 'error' : ''
  }

  constructor() {
    super()
  }

  ngOnInit(): void {
    if (this.props.formCardOptions) {
      this.wrapperOptions = {
        ...this.wrapperOptions,
        ...this.props.formCardOptions,
      }
    }
  }
}
