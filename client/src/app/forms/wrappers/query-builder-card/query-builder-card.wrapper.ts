import { AfterViewInit, Component, OnInit } from '@angular/core'
import { FormArray } from '@angular/forms'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { getEntityColor } from '../../../core/utilities/get-entity-color'
import {
  entityNameFromSearchEndpoint,
  queryBuilderTabConfig,
} from '../../../views/search/query-search/query-search.functions'
import { Maybe } from '@generated/civic.apollo'
import { QuerySearchPageTab } from '../../../views/search/query-search/query-search.types'

type QueryBuilderCardOptions = {
  title?: string
  size?: 'default' | 'small'
  searchEndpoint?: string
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

  get hasNoFilters(): boolean {
    const subFilters = this.subFiltersField?.formControl as
      | FormArray
      | undefined
    return !subFilters || subFilters.length === 0
  }

  get operatorField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'booleanOperator')
  }

  get subFiltersField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'subFilters')
  }

  onClearForm() {
    this.formSubmitted = false
    this.options.formState.showErrors = false
    if (this.options?.formState.clearForm) {
      this.options.formState.clearForm()
    }
  }

  onSubmitQuery() {
    this.formSubmitted = true
    this.options.formState.showErrors = true
    this.field.formControl?.markAllAsTouched()
    if (this.hasNoFilters) {
      return
    }
    if (this.field.formControl?.valid && this.options.formState.submitQuery) {
      this.options.formState.submitQuery()
    }
  }
  getSearchConfig(endpoint: string): Maybe<QuerySearchPageTab> {
    const config = queryBuilderTabConfig.find(
      (tab) => tab.searchEndpoint === endpoint
    )
    if (config) {
      return config as QuerySearchPageTab
    } else return
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
