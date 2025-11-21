import {
  AfterViewInit,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'
import { getQueryFieldConfig } from '@app/forms/config/query-builder/field-config/functions/get-query-field-config'

export type QueryFilterConfigType = 'recursive' | 'static'

export type QueryFilterSelectOption = { label: string; value: string }

@Component({
  selector: 'query-filter',
  templateUrl: './query-filter.type.html',
  styleUrl: './query-filter.type.less',
  standalone: false,
})
export class CvcQueryFilterField
  extends FieldType<FieldTypeConfig>
  implements AfterViewInit, OnInit
{
  // This signal just holds the <select> options
  filterSelectOptions: WritableSignal<QueryFilterSelectOption[]> = signal([])

  constructor() {
    super()
  }

  private checkExpressions() {
    if (this.options.checkExpressions) {
      this.options.checkExpressions(this.field)
    }
  }

  ngOnInit(): void {
    this.props.selectedKey = null
    // generate & build full recursive filter field config(s)
    if (this.field.fieldGroup) {
      const fg = this.field.fieldGroup
      fg.forEach((f, i) => {
        if (f?.props?.filterType === 'recursive') {
          const key = String(f.key)
          const endpoint = f.props.filterEndpoint
          const query = getQueryFieldConfig(key, endpoint)[0]
          if (query && this.options.build) {
            fg[i] = this.options.build(query)
          }
        }
      })
    }
  }
  ngAfterViewInit(): void {
    if (this.props.options) {
      this.filterSelectOptions.set(
        this.props.options as QueryFilterSelectOption[]
      )
    }

    // set selectedKey to model key, if it exists
    if (this.model) {
      this.props.selectedKey = Object.keys(this.model).find(
        (k) => this.model[k] != null
      )
    }
    this.checkExpressions()
  }

  onKeyChange(newKey: string): void {
    this.props.selectedKey = newKey

    this.checkExpressions()
  }
}
