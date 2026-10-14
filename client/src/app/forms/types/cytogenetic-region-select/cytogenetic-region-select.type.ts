import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
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
import {
  CytogeneticRegionSelectTagGQL,
  CytogeneticRegionSelectTypeaheadFieldsFragment,
  CytogeneticRegionSelectTypeaheadGQL,
} from './cytogenetic-region-select.query.gql.generated'

export type CvcCytogeneticRegionSelectFieldOptions = Partial<
  FieldTypeConfig<CvcCytogeneticRegionSelectFieldProps>
>

export type CvcCytogeneticRegionSelectFieldProps = CvcEntitySelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcCytogeneticRegionSelectFieldConfig
  extends FormlyFieldConfig<CvcCytogeneticRegionSelectFieldProps> {
  type:
    | 'cytogenetic-region-select'
    | 'cytogenetic-region-multi-select'
    | Type<CvcCytogeneticRegionSelectField>
}

@Component({
  selector: 'cvc-cytogenetic-region-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcSelectMessagesComponent,
  ],
  templateUrl: './cytogenetic-region-select.type.html',
  styleUrl: './cytogenetic-region-select.type.less',
})
export class CvcCytogeneticRegionSelectField extends CvcEntitySelectFieldBase<
  CytogeneticRegionSelectTypeaheadFieldsFragment,
  void,
  CvcCytogeneticRegionSelectFieldProps
> {
  private readonly typeaheadGQL = inject(CytogeneticRegionSelectTypeaheadGQL)
  private readonly tagGQL = inject(CytogeneticRegionSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Region', plural: 'Regions' },
    typename: 'CytogeneticRegion',
    typeahead: this.typeaheadGQL,
    // this query names its search variable queryTerm, not name
    typeaheadVars: (queryTerm: string) => ({ queryTerm }),
    typeaheadResults: (data) => data?.cytogeneticRegionTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (cytogeneticRegionId: number) => ({ cytogeneticRegionId }),
      result: (data) => data?.cytogeneticRegion,
    },
  })

  defaultOptions: CvcCytogeneticRegionSelectFieldOptions = {
    props: {
      label: 'Region',
      entityName: { singular: 'Region', plural: 'Regions' },
      isMultiSelect: false,
      placeholder: 'Search Regions',
    },
  }
}
