import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'

export type CvcFormFieldExtraType = 'description' | 'prompt'

type FormFieldOptions = {}

export interface CvcFormFieldWrapperProps extends FormlyFieldProps {
  formFieldOptions: FormFieldOptions
}

const defaultWrapperOptions: FormFieldOptions = {}

@Component({
    selector: 'cvc-form-field-wrapper',
    templateUrl: './form-field.wrapper.html',
    styleUrls: ['./form-field.wrapper.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.layout-horizontal]': 'formLayout === "horizontal"',
        '[class.layout-vertical]': 'formLayout === "vertical"',
        '[class.layout-inline]': 'formLayout === "inline"',
    },
    standalone: false
})
export class CvcFormFieldWrapper
  extends FieldWrapper<FormlyFieldConfig>
  implements OnInit, AfterViewInit
{
  formLayout: NzFormLayoutType = 'vertical'
  wrapperOptions: FormFieldOptions = { ...defaultWrapperOptions }

  get errorState() {
    return this.showError ? 'error' : ''
  }

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  ngOnInit(): void {
    // set field props defaults
    this.props.showExtra = this.props.showExtra ?? true
    this.props.extraType = this.props.extraType ?? 'prompt'
    this.props.showErrorTip = this.props.showErrorTip ?? true

    // merge wrapper defaults with field config specified properties
    if (this.props.formFieldOptions) {
      this.wrapperOptions = {
        ...this.wrapperOptions,
        ...this.props.formFieldOptions,
      }
    }
    if (this.options.formState.formLayout) {
      this.formLayout = this.options.formState.formLayout
    }
  }
  ngAfterViewInit(): void {
    // some simpler fields, e.g. base fields, require a detectChanges here to
    // update wrapper class on formControl status changes, e.g. touched
    this.cdr.detectChanges()
  }
}
