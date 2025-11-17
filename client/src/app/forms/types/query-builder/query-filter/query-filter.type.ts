import {
  AfterViewInit,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'
import { getParentEndpoint } from '@app/forms/config/query-builder/field-config/functions/get-parent-endpoint'
import { getFilterMetadata } from '@app/forms/config/query-builder/field-config/filter-metadata.config'
import { generateRuntimeFieldConfig } from '@app/forms/config/query-builder/field-config/functions/generate-runtime-field-config'
import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'

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
  // This signal holds the <select> options, built from metadata
  filterSelectOptions: WritableSignal<{ label: string; value: any }[]> = signal(
    []
  )

  // Track the parent endpoint for this filter
  private parentEndpoint?: QueryBuilderSearchEndpoint

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

    // Get the parent endpoint to know which metadata to use
    this.parentEndpoint = getParentEndpoint(this.field)

    if (!this.parentEndpoint) {
      console.error('query-filter could not determine parent endpoint')
      return
    }
    console.log(`query-filter parentEndpoint: ${this.parentEndpoint}`)

    // Build select options from metadata
    const metadata = getFilterMetadata(this.parentEndpoint)
    const options = metadata.map((m) => ({
      label: m.label,
      value: m.key,
    }))
    this.filterSelectOptions.set(options)

    // Initialize fieldGroup as empty - will be populated when key is selected
    if (!this.field.fieldGroup) {
      this.field.fieldGroup = []
    }
  }

  ngAfterViewInit(): void {
    // If model already has data (e.g., from permalink), find and select the key
    if (this.model) {
      const existingKey = Object.keys(this.model).find(
        (k) => this.model[k] != null
      )
      if (existingKey) {
        this.props.selectedKey = existingKey
        // Generate the field config for the existing key
        this.generateAndAttachFieldConfig(existingKey)
        this.checkExpressions()
      }
    }
    console.log(
      `query-filter AfterViewInit selectedKey: ${this.props.selectedKey}`
    )
  }

  onKeyChange(newKey: string): void {
    // When key changes, remove old key from model
    if (this.props.selectedKey && this.model[this.props.selectedKey]) {
      delete this.model[this.props.selectedKey];
    }
    this.props.selectedKey = newKey

    // Generate the field config for the newly selected key
    this.generateAndAttachFieldConfig(newKey)

    this.checkExpressions()
  }

  /**
   * Generates a field config for the selected key and attaches it to the fieldGroup.
   */
  private generateAndAttachFieldConfig(key: string): void {
    if (!this.parentEndpoint) {
      console.error('Cannot generate field config without parent endpoint')
      return
    }

    const fieldConfig = generateRuntimeFieldConfig(key, this.parentEndpoint)

    if (!fieldConfig) {
      console.error(`Could not generate field config for key: ${key}`)
      return
    }

    // IMPORTANT: To prevent UI state loss when multiple filters of the same
    // type are added, we must provide a unique ID to the field config.
    // Formly's change detection uses this ID to track components.
    // We create a unique ID by combining the parent field's unique ID
    // with the selected filter key.
    fieldConfig.id = `${this.field.id}_${key}`;

    // IMPORTANT: Replace the entire fieldGroup array to trigger
    // Formly's change detection
    // Simply modifying the array in place doesn't work reliably
    this.field.fieldGroup = [fieldConfig]

    // Initialize the model for the new key if it doesn't exist
    if (this.model && !this.model[key]) {
      this.model[key] = {}
    }

    // Trigger Formly to rebuild the form with the new field config
    if (this.options.build) {
      this.options.build(this.field)
    }

    console.log(
      `Generated and attached field config for key: ${key}`,
      fieldConfig
    )
  }
}
