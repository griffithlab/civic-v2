import {
  AfterViewInit,
  Component,
  effect,
  EnvironmentInjector,
  inject,
  OnInit,
  runInInjectionContext,
  signal,
  WritableSignal,
} from '@angular/core'
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
  onCreatePermalinkChecked: WritableSignal<boolean> = signal(false)
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
  onResetForm() {
    if (this.options.resetModel) {
      this.options.resetModel()
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
  ngAfterViewInit() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        const newChecked = this.onCreatePermalinkChecked()
        const model = this.field.parent?.model
        if (model) {
          if (newChecked !== model.createPermalink) {
            model.createPermalink = newChecked
          }
        }
      })
    })
  }
}
