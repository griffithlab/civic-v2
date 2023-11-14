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
  gutter?:
    | string
    | number
    | IndexableObject
    | [number, number]
    | [IndexableObject, IndexableObject]
    | null
  // nz-col's nzSpan, nzXs - nzXXl config applied to every field
  colSpan?: string | number | null
  // NOTE: only colSpan layouts are currently supported
  responsive?: ResponsiveColConfig
  // nz-col's nzXs - nzXXl applied iteratively to each field
  colSpanIndexed?: string[] | number[] | null
  responsiveIndexed?: ResponsiveColConfig[]
  // NOTE: colSpanIndexed and responsiveIndexed arrays will iteratively
  // populate each fields' nz-col container attributes.
  // e.g. colSpanIndexed[0] value will set the nzSpan attribute of
  // the nz-col containing the field at fieldGroup[0].
  // see nz-grid's API docs for details: https://ng.ant.design/components/grid/en#api
}

export interface CvcFormRowWrapperProps extends FormlyFieldProps {
  formRowOptions?: FormRowOptions
}

const defaultWrapperOptions: FormRowOptions = {
  gutter: [8, 8],
  colSpan: 24,
}

@Component({
  selector: 'cvc-form-row',
  templateUrl: './form-row.wrapper.html',
  styleUrls: ['./form-row.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFormRowWrapper
  extends FieldWrapper<FormlyFieldConfig<CvcFormRowWrapperProps>>
  implements OnInit
{
  wrapperOptions: FormRowOptions = { ...defaultWrapperOptions }

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
  }
}
