import { NgModule } from '@angular/core'
import { CvcRegionVariantNameSelectField } from '@app/forms/types/region-variant-name-select/region-variant-name-select.type'
import { FormlyModule } from '@ngx-formly/core'

/**
 * Registers only the field type the Region Variant builder modal renders.
 *
 * The modal used to import `CvcSelectFieldsRegistryModule`, which registers
 * `variant-select` — and variant-select imports this modal as one of its
 * creation paths, closing an import cycle
 * (registry -> variant-select -> region-variant-select -> registry) that
 * defeats tree-shaking and pulled every registered select into this modal's
 * graph for the sake of one field.
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
