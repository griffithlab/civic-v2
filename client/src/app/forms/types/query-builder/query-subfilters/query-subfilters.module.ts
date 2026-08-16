import {
  ConfigOption,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { CvcQuerySubfiltersField } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.type'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AbstractControl, ReactiveFormsModule } from '@angular/forms'
import { getFieldOptions } from '@app/forms/config/query-builder/field-config/functions/get-field-options'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'

const filterCompleteValidator = {
  expression: (c: AbstractControl): boolean => {
    const value = c.value
    return !(
      !value ||
      typeof value !== 'object' ||
      Object.keys(value).length === 0
    )
  },
  message: 'Select an attribute or remove this filter.',
}

/**
 * Builds one filter row. Every `query-subfilters` field gets this, so callers
 * only declare `props.filterEndpoint` and `props.isRootFilter` and the row
 * shape follows.
 *
 * It lives here rather than in `getQueryFieldConfig` to keep the query builder's
 * recursion out of the module graph. The builder is recursive by nature — a
 * filter can hold a subfilter over any endpoint, including its own — so the
 * `search-*.config` files call `getQueryFieldConfig` while `getFieldOptions`
 * imports all of those configs. With the factory in `getQueryFieldConfig`, that
 * closed a genuine import cycle
 * (get-query-field-config -> get-field-options -> search-*.config -> back).
 * The recursion is unavoidable, but resolving options where the rows are
 * actually rendered keeps it out of the static imports.
 */
const buildFilterRow = (field: FormlyFieldConfig): FormlyFieldConfig => {
  const endpoint = field.props!.filterEndpoint
  return {
    type: 'query-filter',
    resetOnHide: true,
    validators: { filterComplete: filterCompleteValidator },
    props: {
      options: getFieldOptions(endpoint, true).map((opt) => ({
        label: opt.props?.label,
        value: opt.key,
      })),
    },
    fieldGroup: getFieldOptions(endpoint, field.props!.isRootFilter),
  }
}

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'query-subfilters',
      component: CvcQuerySubfiltersField,
      defaultOptions: {
        props: {
          label: 'Query Subfilter Repeater',
        },
        fieldArray: buildFilterRow,
      },
    },
  ],
}

@NgModule({
  declarations: [CvcQuerySubfiltersField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    NzFormModule,
    NzGridModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
  ],
})
export class CvcQuerySubfiltersModule {}
