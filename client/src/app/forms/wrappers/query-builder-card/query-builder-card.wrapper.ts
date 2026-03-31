import { AfterViewInit, Component, OnInit } from '@angular/core'
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
  implements OnInit, AfterViewInit
{
  wrapperOptions: QueryBuilderCardOptions = { ...defaultWrapperOptions }
  formSubmitted = false

  get isFormInvalid(): boolean {
    return this.formSubmitted && (this.field.formControl?.invalid ?? false)
  }

  get operatorField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'booleanOperator')
  }

  get subFiltersField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'subFilters')
  }

  onClearForm() {
    this.formSubmitted = false
    if (this.options?.formState.clearForm) {
      this.options.formState.clearForm()
    }
  }

  onSubmitQuery() {
    this.formSubmitted = true
    this.field.formControl?.markAllAsTouched()
    if (this.field.formControl?.valid && this.options.formState.submitQuery) {
      this.options.formState.submitQuery()
    }
  }

  ngOnInit(): void {
    if (this.props.formCardOptions) {
      this.wrapperOptions = {
        ...this.wrapperOptions,
        ...this.props.formCardOptions,
      }
    }
  }
  ngAfterViewInit() {}
}
