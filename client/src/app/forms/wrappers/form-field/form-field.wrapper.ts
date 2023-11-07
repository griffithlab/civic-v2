import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'

export type CvcFormFieldExtraType = 'description' | 'prompt'

export interface CvcFormFieldWrapperLayout {
  showExtra: boolean
}

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
})
export class CvcFormFieldWrapper
  extends FieldWrapper<FormlyFieldConfig>
  implements OnInit, AfterViewInit
{
  formLayout: NzFormLayoutType = 'vertical'
  wrapper!: CvcFormFieldWrapperLayout

  get errorState() {
    return this.showError ? 'error' : ''
  }

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  ngOnInit(): void {
    // merge local wrapper config with field config specified properties
    try {
      this.wrapper = {
        showExtra:
          this.props.layout?.showExtra !== undefined
            ? this.props.layout.showExtra
            : true,
      }
    } catch (err) {
      console.error(err)
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
