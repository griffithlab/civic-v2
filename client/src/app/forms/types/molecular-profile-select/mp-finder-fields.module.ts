import { NgModule } from '@angular/core'
import { CvcFeatureSelectField } from '@app/forms/types/feature-select/feature-select.type'
import { CvcVariantSelectField } from '@app/forms/types/variant-select/variant-select.type'
import { FormlyModule } from '@ngx-formly/core'

/**
 * Registers only the field types mp-finder's nested formly form renders.
 *
 * mp-components used to import `CvcSelectFieldsRegistryModule` for these two.
 * That registry also registers `molecular-profile-select`, whose field imports
 * mp-components — closing an import cycle
 * (registry -> molecular-profile-select -> mp-components -> registry) that
 * defeats tree-shaking and pulled every registered select into mp-finder's
 * graph for the sake of two.
 *
 * Definitions are kept identical to the registry's. If mp-finder grows another
 * field type, register it here rather than reaching for the full registry.
 */
@NgModule({
  imports: [
    FormlyModule.forChild({
      types: [
        {
          name: 'feature-select',
          wrappers: ['form-field'],
          component: CvcFeatureSelectField,
          defaultOptions: { props: { label: 'Feature' } },
        },
        {
          name: 'variant-select',
          wrappers: ['form-field'],
          component: CvcVariantSelectField,
          defaultOptions: { props: { label: 'Variant' } },
        },
      ],
    }),
  ],
  exports: [FormlyModule],
})
export class CvcMpFinderFieldsModule {}
