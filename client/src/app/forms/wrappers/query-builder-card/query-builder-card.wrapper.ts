import { Component, OnInit } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'

type QueryBuilderCardOptions = {
  title?: string
  size?: 'default' | 'small'
}

export interface CvcQueryBuilderCardWrapperProps extends FormlyFieldProps {
  formCardOptions?: QueryBuilderCardOptions
}

const defaultWrapperOptions: QueryBuilderCardOptions = {
  size: 'default',
}

@Component({
  selector: 'cvc-query-builder-card',
  templateUrl: './query-builder-card.wrapper.html',
  styleUrls: ['./query-builder-card.wrapper.less'],
  standalone: false,
})
export class CvcQueryBuilderCardWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcQueryBuilderCardWrapperProps>>
  implements OnInit
{
  wrapperOptions: QueryBuilderCardOptions = { ...defaultWrapperOptions }

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
