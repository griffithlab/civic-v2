import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
  CvcHighlightComponent,
  CvcSelectMessagesComponent,
  entitySelectConfig,
} from '@app/forms/select'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  VariantTypeSelectTagGQL,
  VariantTypeSelectTypeaheadFieldsFragment,
  VariantTypeSelectTypeaheadGQL,
} from './variant-type-select.query.gql.generated'

export type CvcVariantTypeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcVariantTypeSelectFieldProps>
>

export type CvcVariantTypeSelectFieldProps = CvcEntitySelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcVariantTypeSelectFieldConfig
  extends FormlyFieldConfig<CvcVariantTypeSelectFieldProps> {
  type:
    | 'variant-type-select'
    | 'variant-type-multi-select'
    | Type<CvcVariantTypeSelectField>
}

@Component({
  selector: 'cvc-variant-type-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcHighlightComponent,
    CvcSelectMessagesComponent,
  ],
  templateUrl: './variant-type-select.type.html',
  styleUrl: './variant-type-select.type.less',
})
export class CvcVariantTypeSelectField extends CvcEntitySelectFieldBase<
  VariantTypeSelectTypeaheadFieldsFragment,
  void,
  CvcVariantTypeSelectFieldProps
> {
  private readonly typeaheadGQL = inject(VariantTypeSelectTypeaheadGQL)
  private readonly tagGQL = inject(VariantTypeSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'VariantType', plural: 'VariantTypes' },
    typename: 'VariantType',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.variantTypeTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.variantType,
    },
  })

  defaultOptions: CvcVariantTypeSelectFieldOptions = {
    props: {
      entityName: { singular: 'VariantType', plural: 'VariantTypes' },
      isMultiSelect: false,
      placeholder: 'Search Variant Types',
      description:
        'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',
    },
  }
}
