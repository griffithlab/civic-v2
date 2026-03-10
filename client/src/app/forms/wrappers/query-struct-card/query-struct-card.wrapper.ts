import { Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'

export type QueryStructCardOptions = {
  title?: string
  size?: 'default' | 'small'
}

export interface CvcQueryStructCardWrapperProps extends FormlyFieldProps {
  queryStructCardOptions?: QueryStructCardOptions
}

const defaultWrapperOptions: QueryStructCardOptions = {
  size: 'default',
}

@Component({
  selector: 'cvc-query-struct-card',
  templateUrl: './query-struct-card.wrapper.html',
  styleUrls: ['./query-struct-card.wrapper.less'],
  standalone: false,
})
export class CvcQueryStructCardWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcQueryStructCardWrapperProps>>
  implements OnInit
{
  wrapperOptions: QueryStructCardOptions = { ...defaultWrapperOptions }

  get errorState() {
    return this.showError ? 'error' : ''
  }

  constructor() {
    super()
  }

  ngOnInit(): void {
    if (this.props.queryStructCardOptions) {
      this.wrapperOptions = {
        ...this.wrapperOptions,
        ...this.props.queryStructCardOptions,
      }
    }
  }
}
