import {
  AfterViewInit,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'
import {
  AdvancedSearchFilter,
  AdvancedSearchRecursiveFilterKey,
} from '@app/forms/config/query-builder/query-builder.types'

export type QueryFilterConfigType = 'recursive' | 'static'

export type QueryFilterSelectOption = { label: string; value: string }
export type QueryFilterFormModel<
  TKey extends AdvancedSearchRecursiveFilterKey,
> = {
  createPermalink: boolean
} & {
  [K in TKey]: AdvancedSearchFilter
}
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
    // console.log(
    //   '=====query-filter.type ngOnInit selectedKey',
    //   this.props?.selectedKey
    // )
    // this.props.selectedKey = null
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
    } else {
      this.props.selectedKey = null
    }
    this.checkExpressions()
  }

  onKeyChange(newKey: string): void {
    this.props.selectedKey = newKey
    this.checkExpressions()
  }
}
