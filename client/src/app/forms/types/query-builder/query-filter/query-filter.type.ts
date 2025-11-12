import {
  AfterViewInit,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core'
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'

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
  filterSelectOptions: WritableSignal<{ label: string; value: any }[]> = signal(
    []
  )

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
  }
  ngAfterViewInit(): void {
    const newOptions = this.filterSelectOptions()
    if (this.field.fieldGroup) {
      this.field.fieldGroup.forEach((opt: FormlyFieldConfig) => {
        newOptions.push({ label: opt.props!.label!, value: opt.key })
      })
      this.filterSelectOptions.set(newOptions)
    }

    if (this.model) {
      this.props.selectedKey = Object.keys(this.model).find(
        (k) => this.model[k] != null
      )
    }
    console.log(
      `query-filter AfterViewInit selectedKey: ${this.props.selectedKey}`
    )
    this.checkExpressions()
  }

  onKeyChange(newKey: string): void {
    this.props.selectedKey = newKey

    this.checkExpressions()
  }
}
