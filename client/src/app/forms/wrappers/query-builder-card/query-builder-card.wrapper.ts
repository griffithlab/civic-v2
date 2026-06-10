import { AfterViewInit, Component, inject, OnInit } from '@angular/core'
import { FormArray } from '@angular/forms'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzMessageService } from 'ng-zorro-antd/message'
import { getEntityColor } from '../../../core/utilities/get-entity-color'
import {
  entityNameFromSearchEndpoint,
  queryBuilderTabConfig,
} from '../../../views/search/query-search/query-search.functions'
import { Maybe } from '@generated/civic.apollo'
import { QuerySearchPageTab } from '../../../views/search/query-search/query-search.types'
import { AdvancedSearchUrlService } from '@app/forms/config/query-builder/advanced-search-url.service'
import { AdvancedSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'

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

  private searchUrl = inject(AdvancedSearchUrlService)
  private message = inject(NzMessageService)

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
  // build a shareable URL from the current query and copy it to the clipboard
  onCopyLink(): void {
    const endpoint = this.wrapperOptions.searchEndpoint as
      | AdvancedSearchEndpoint
      | undefined
    const query = this.field.formControl?.value
    if (!endpoint || !query) return
    const url = this.searchUrl.buildShareableUrl(endpoint, query)
    navigator.clipboard.writeText(url).then(
      () => this.message.success('Shareable search link copied to clipboard'),
      () => this.message.error('Could not copy link to clipboard')
    )
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
