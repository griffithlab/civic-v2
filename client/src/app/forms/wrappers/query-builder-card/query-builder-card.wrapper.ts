import {
  AfterViewInit,
  Component,
  EnvironmentInjector,
  inject,
  OnInit,
} from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { FormControl } from '@angular/forms'

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

  get errorState() {
    return this.showError ? 'error' : ''
  }

  private injector = inject(EnvironmentInjector)
  constructor() {
    super()
  }

  get operatorField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'booleanOperator')
  }

  get subFiltersField(): FormlyFieldConfig | undefined {
    return this.field.fieldGroup?.find((f) => f.key === 'subFilters')
  }

  // locate the sibling field config
  get createPermalinkField(): FormlyFieldConfig | undefined {
    return this.field.parent?.fieldGroup?.find(
      (f) => f.key === 'createPermalink'
    )
  }
  // to get its formControl
  get createPermalinkControl(): FormControl | null {
    return (this.createPermalinkField?.formControl as FormControl) ?? null
  }
  // and the createPermalink model value
  get createPermalinkValue(): boolean {
    return this.createPermalinkControl?.value ?? false
  }

  onResetForm() {
    if (this.options?.resetModel) {
      this.options.resetModel()
    }
  }

  onSubmitQuery() {
    if (this.options.formState.submitQuery) {
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
