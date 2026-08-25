import { NgModule } from '@angular/core'
import { CvcCytogeneticRegionSelectField } from '@app/forms/types/cytogenetic-region-select/cytogenetic-region-select.type'
import { FormlyModule } from '@ngx-formly/core'

/**
 * Registers only the field types the Region builder modal renders.
 *
 * Importing `CvcSelectFieldsRegistryModule` here would close an import cycle
 * (registry -> feature-select -> region-select -> registry) that defeats
 * tree-shaking and pulls every registered field type into the modal's graph.
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
          name: 'cytogenetic-region-select',
          wrappers: ['form-field'],
          component: CvcCytogeneticRegionSelectField,
          defaultOptions: { props: { label: 'Region' } },
        },
      ],
    }),
  ],
  exports: [FormlyModule],
})
export class CvcRegionSelectFieldsModule {}
