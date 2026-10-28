import { Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'

type QuerySubfiltersCardOptions = {
  title?: string
  size?: 'default' | 'small'
}

export interface CvcQuerySubfiltersCardWrapperProps extends FormlyFieldProps {
  formCardOptions?: QuerySubfiltersCardOptions
}

const defaultWrapperOptions: QuerySubfiltersCardOptions = {
  size: 'default',
}

@Component({
  selector: 'cvc-query-subfilters-card',
  templateUrl: './query-subfilters-card.wrapper.html',
  styleUrls: ['./query-subfilters-card.wrapper.less'],
  standalone: false,
})
export class CvcQuerySubfiltersCardWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcQuerySubfiltersCardWrapperProps>>
  implements OnInit
{
  wrapperOptions: QuerySubfiltersCardOptions = { ...defaultWrapperOptions }

  get errorState() {
    return this.showError ? 'error' : ''
  }

  constructor() {
    super()
  }

  get operatorField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'booleanOperator')
  }
  get subFiltersField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'subFilters')
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
