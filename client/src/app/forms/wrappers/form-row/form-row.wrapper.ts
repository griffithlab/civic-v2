import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { IndexableObject } from 'ng-zorro-antd/core/types'
import { EmbeddedProperty } from 'ng-zorro-antd/grid'

type ResponsiveColConfig = {
  xs?: string | number | EmbeddedProperty | null
  sm?: string | number | EmbeddedProperty | null
  md?: string | number | EmbeddedProperty | null
  lg?: string | number | EmbeddedProperty | null
  xl?: string | number | EmbeddedProperty | null
  xxl?: string | number | EmbeddedProperty | null
}

type FormRowOptions = {
  // nz-row gutter
  gutter?: number | [number, number] | null
  // NOTE: if gutter[1] (vertical gutter) is set to 0, row will receive no top margin (see mp-finder config)
  // nz-col's nzSpan, nzXs - nzXXl config applied to every field
  span?: string | number | null
  responsive?: ResponsiveColConfig
  flex?: string | number | null
  // nz-col's nzXs - nzXXl applied iteratively to each field
  spanIndexed?: string[] | number[] | null
  responsiveIndexed?: ResponsiveColConfig[]
  flexIndexed?: string[] | number[] | null
  // NOTE: spanIndexed and responsiveIndexed arrays will iteratively
  // populate each fields' nz-col container attributes.
  // e.g. spanIndexed[0] value will set the nzSpan attribute of
  // the nz-col containing the field at fieldGroup[0].
  // see nz-grid's API docs for details: https://ng.ant.design/components/grid/en#api
}

export interface CvcFormRowWrapperProps extends FormlyFieldProps {
  formRowOptions?: FormRowOptions
}

const defaultWrapperOptions: FormRowOptions = {
  gutter: [8, 8],
  span: 24,
}

@Component({
  selector: 'cvc-form-row',
  templateUrl: './form-row.wrapper.html',
  styleUrls: ['./form-row.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFormRowWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormRowWrapperProps>>
  implements OnInit
{
  wrapperOptions: FormRowOptions = { ...defaultWrapperOptions }
  topMargin: string = '0'

  constructor() {
    super()
  }

  ngOnInit(): void {
    if (this.props.formRowOptions) {
      this.wrapperOptions = {
        ...this.wrapperOptions,
        ...this.props.formRowOptions,
      }
    }
    // form-row wrappers stacked on each other do not provide enough
    // margins between them to match the horizontal gutter size between
    // enclosed column blocks. This logic attempts to equalize margins.
    // NOTE: setting horizontal gutter to zero (e.g. gutter: [8,0]) sets
    // top margin to zero - do this for one-line forms like variant-quick-add, mp-finder
    if (Array.isArray(this.wrapperOptions.gutter)) {
      if (this.wrapperOptions.gutter[1] > 0) {
        this.topMargin = this.wrapperOptions.gutter[1] / 2 + 'px'
      } else {
        this.topMargin = '0'
      }
    } else if (this.wrapperOptions.gutter && this.wrapperOptions.gutter > 0) {
      this.topMargin = this.wrapperOptions.gutter + 'px'
    } else {
      this.topMargin = '0'
    }
  }
}
