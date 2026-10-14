import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'

export type FormCardOptions = {
  title?: string
  size?: 'default' | 'small'
  /**
   * Show the field-status legend in the card header. Defaults to true for
   * full-size cards and false for small ones, so a form's outer card explains
   * its fields once without every nested sub-card repeating it.
   */
  showLegend?: boolean
}

export interface CvcFormCardWrapperProps extends FormlyFieldProps {
  formCardOptions?: FormCardOptions
}

const defaultWrapperOptions: FormCardOptions = {
  size: 'default',
}

@Component({
  selector: 'cvc-form-card',
  templateUrl: './form-card.wrapper.html',
  styleUrls: ['./form-card.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcFormCardWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormCardWrapperProps>>
  implements OnInit
{
  wrapperOptions: FormCardOptions = { ...defaultWrapperOptions }

  get errorState() {
    return this.showError ? 'error' : ''
  }

  /** nested sub-cards are rendered small; only the outer card explains states */
  get showLegend(): boolean {
    return this.wrapperOptions.showLegend ?? this.wrapperOptions.size !== 'small'
  }

  constructor() {
    super()
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
