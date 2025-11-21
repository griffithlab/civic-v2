import {
  AfterViewInit,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core'
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import {
  AdvancedSearchFilter,
  AdvancedSearchRecursiveFilterKey,
} from '@app/forms/config/query-builder/query-builder.types'
import { BooleanOperator } from '@app/generated/civic.apollo'

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
    console.log(this)
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
    // if (this.options.build) this.options.build()
    this.checkExpressions()
  }

  mergeFieldConfigs(
    base: FormlyFieldConfig,
    stub: Partial<FormlyFieldConfig>
  ): FormlyFieldConfig {
    return {
      ...base,
      props: { ...(base.props || {}), ...(stub.props || {}) },
      expressions: {
        ...(base.expressions || {}),
        ...(stub.expressions || {}),
      },
      hooks: { ...(base.hooks || {}), ...(stub.hooks || {}) },
      // parent: stub.parent,
    }
  }
  private getRecursiveDefaultModel<
    TKey extends AdvancedSearchRecursiveFilterKey,
  >(key: TKey): QueryFilterFormModel<TKey> {
    const model = {
      createPermalink: true,
      [key]: {
        booleanOperator: BooleanOperator.Or,
        subFilters: [],
      },
    } as QueryFilterFormModel<TKey>

    return model
  }
}
