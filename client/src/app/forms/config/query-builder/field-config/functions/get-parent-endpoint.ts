import { FormlyFieldConfig } from '@ngx-formly/core'
import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'

/**
 * Traverses up the field tree to find the parent endpoint.
 * This is needed by query-filter fields to know which endpoint's metadata to use
 * when generating field configs.
 *
 * The endpoint can be stored in two places:
 * 1. On the query-builder-card or query-subfilters-card wrapper props as 'parentEndpoint'
 * 2. On the formState as 'searchEndpoint' (for the root level)
 */
export function getParentEndpoint(
  field: FormlyFieldConfig
): QueryBuilderSearchEndpoint | undefined {
  // Check if this field or its ancestors have a parentEndpoint prop
  let currentField: FormlyFieldConfig | undefined = field

  while (currentField) {
    // Check if the current field has parentEndpoint in props
    if (currentField.props?.['parentEndpoint']) {
      return currentField.props['parentEndpoint'] as QueryBuilderSearchEndpoint
    }

    // Move up to parent
    currentField = currentField.parent
  }

  // If not found in props, check formState (root level)
  if (field.options?.formState?.searchEndpoint) {
    return field.options.formState.searchEndpoint as QueryBuilderSearchEndpoint
  }

  console.warn('Could not find parent endpoint for field:', field.key)
  return undefined
}
