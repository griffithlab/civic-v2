/**
 * DEPRECATED: This function is no longer used.
 *
 * Filter field options are now:
 * 1. Defined as metadata in filter-metadata.config.ts
 * 2. Generated dynamically at runtime by generate-runtime-field-config.ts
 * 3. Used by query-filter.type.ts when a filter key is selected
 *
 * This prevents recursive config generation and allows for nested entity filters.
 *
 * Migration guide:
 * - Instead of calling getFieldOptions(), use getFilterMetadata() from filter-metadata.config.ts
 * - To generate a field config, use generateRuntimeFieldConfig() from generate-runtime-field-config.ts
 */
