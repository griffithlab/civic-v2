import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcHighlightComponent,
  CvcSelectAddFormComponent,
  CvcSelectMessagesComponent,
  CvcTypeGateConfig,
  CvcTypeGatedSelectFieldBase,
  CvcTypeGatedSelectFieldProps,
  entitySelectConfig,
} from '@app/forms/select'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcDiseaseQuickAddForm } from './disease-quick-add/disease-quick-add.form'
import {
  DiseaseSelectTagGQL,
  DiseaseSelectTypeaheadFieldsFragment,
  DiseaseSelectTypeaheadGQL,
} from './disease-select.query.gql.generated'

export type CvcDiseaseSelectFieldOptions = Partial<
  FieldTypeConfig<CvcDiseaseSelectFieldProps>
>

export type CvcDiseaseSelectFieldProps = CvcTypeGatedSelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcDiseaseSelectFieldConfig
  extends FormlyFieldConfig<CvcDiseaseSelectFieldProps> {
  type: 'disease-select' | 'disease-multi-select' | Type<CvcDiseaseSelectField>
}

@Component({
  selector: 'cvc-disease-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTooltipModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcHighlightComponent,
    CvcSelectAddFormComponent,
    CvcSelectMessagesComponent,
    CvcDiseaseQuickAddForm,
  ],
  templateUrl: './disease-select.type.html',
  styleUrl: './disease-select.type.less',
})
export class CvcDiseaseSelectField extends CvcTypeGatedSelectFieldBase<
  DiseaseSelectTypeaheadFieldsFragment,
  void,
  CvcDiseaseSelectFieldProps
> {
  private readonly typeaheadGQL = inject(DiseaseSelectTypeaheadGQL)
  private readonly tagGQL = inject(DiseaseSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Disease', plural: 'Diseases' },
    typename: 'Disease',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.diseaseTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.disease,
    },
  })

  protected readonly typeGate: CvcTypeGateConfig = {
    requiresKey: 'requiresDisease',
    excludedDescription: (entityType, entityName) =>
      `${entityType} ${entityName} does not include associated diseases`,
  }

  defaultOptions: CvcDiseaseSelectFieldOptions = {
    props: {
      entityName: { singular: 'Disease', plural: 'Diseases' },
      tooltip:
        'Cancer or cancer subtype that is a result of the described variant',
      isMultiSelect: false,
      requireType: true,
      placeholder: 'Search Diseases',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to select an associated Disease${
          isMultiSelect ? '(s)' : ''
        }`,
    },
  }
}
