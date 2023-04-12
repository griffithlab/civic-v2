import { Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'

export interface CvcFormCardWrapperProps extends FormlyFieldProps {
  title: string
  gutterHorizontal: number
  gutterVertical: number
}

const defaultProps = {
  gutterHorizontal: 8,
  gutterVertical: 8,
}

@Component({
  selector: 'cvc-form-card',
  templateUrl: './form-card.wrapper.html',
  styleUrls: ['./form-card.wrapper.less'],
})
export class CvcFormCardWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormCardWrapperProps>>
  implements OnInit
{
  get errorState() {
    return this.showError ? 'error' : ''
  }

  constructor() {
    super()
  }

  ngOnInit(): void {
    this.props.gutterHorizontal =
      this.props.gutterHorizontal || defaultProps.gutterHorizontal
    this.props.gutterVertical =
      this.props.gutterVertical || defaultProps.gutterVertical
  }
}
