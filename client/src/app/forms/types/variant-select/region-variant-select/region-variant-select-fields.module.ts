import { NgModule } from '@angular/core'
import { CvcRegionVariantNameSelectField } from '@app/forms/types/region-variant-name-select/region-variant-name-select.type'
import { FormlyModule } from '@ngx-formly/core'

/**
 * Registers only the field type the Region Variant builder modal renders.
 *
 * Importing `CvcSelectFieldsRegistryModule` here would close an import cycle
 * (registry -> variant-select -> region-variant-select -> registry) that
 * defeats tree-shaking and pulls every registered select into the modal's graph.
 *
 * `org-submit-button` comes from its own module and is imported directly by the
 * form. If this modal grows another field type, register it here rather than
 * reaching for the full registry.
 */
@NgModule({
  imports: [
    FormlyModule.forChild({
      types: [
        {
          name: 'region-variant-name-select',
          wrappers: ['form-field'],
          component: CvcRegionVariantNameSelectField,
        },
      ],
    }),
  ],
  exports: [FormlyModule],
})
export class CvcRegionVariantSelectFieldsModule {}
