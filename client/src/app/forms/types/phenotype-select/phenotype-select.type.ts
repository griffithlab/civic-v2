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
  PhenotypeSelectTagGQL,
  PhenotypeSelectTypeaheadFieldsFragment,
  PhenotypeSelectTypeaheadGQL,
} from './phenotype-select.query.gql.generated'

export type CvcPhenotypeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcPhenotypeSelectFieldProps>
>

export type CvcPhenotypeSelectFieldProps = CvcEntitySelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcPhenotypeSelectFieldConfig
  extends FormlyFieldConfig<CvcPhenotypeSelectFieldProps> {
  type:
    | 'phenotype-select'
    | 'phenotype-multi-select'
    | Type<CvcPhenotypeSelectField>
}

@Component({
  selector: 'cvc-phenotype-select',
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
  templateUrl: './phenotype-select.type.html',
  styleUrl: './phenotype-select.type.less',
})
export class CvcPhenotypeSelectField extends CvcEntitySelectFieldBase<
  PhenotypeSelectTypeaheadFieldsFragment,
  void,
  CvcPhenotypeSelectFieldProps
> {
  private readonly typeaheadGQL = inject(PhenotypeSelectTypeaheadGQL)
  private readonly tagGQL = inject(PhenotypeSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Phenotype', plural: 'Phenotypes' },
    typename: 'Phenotype',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.phenotypeTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.phenotype,
    },
  })

  defaultOptions: CvcPhenotypeSelectFieldOptions = {
    props: {
      entityName: { singular: 'Phenotype', plural: 'Phenotypes' },
      isMultiSelect: false,
      tooltip:
        'Phenotype or phenotype combination which interacts with the specified variant',
      placeholder: 'Search Phenotypes',
      description:
        'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',
      extraType: 'prompt',
    },
  }
}
