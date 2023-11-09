import { Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { IndexableObject } from 'ng-zorro-antd/core/types'

export interface CvcFormCardWrapperProps extends FormlyFieldProps {
  title: string
  gutter:
    | string
    | number
    | IndexableObject
    | [number, number]
    | [IndexableObject, IndexableObject]
    | null
}

const defaultProps = {
  gutter: [6, 20],
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
    if (!this.props.gutter) this.props.gutter = defaultProps.gutter
  }
}
