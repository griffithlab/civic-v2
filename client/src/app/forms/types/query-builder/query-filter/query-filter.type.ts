import { Component, OnInit, signal, WritableSignal } from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'

export type QueryFilterSelectOption = { label: string; value: string }
@Component({
  selector: 'query-filter',
  templateUrl: './query-filter.type.html',
  styleUrl: './query-filter.type.less',
  standalone: false,
})
export class CvcQueryFilterField
  extends FieldType<FieldTypeConfig>
  implements OnInit
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
