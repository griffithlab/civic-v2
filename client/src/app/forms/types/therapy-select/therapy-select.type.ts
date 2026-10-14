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
import { CvcTherapyQuickAddForm } from './therapy-quick-add/therapy-quick-add.form'
import {
  TherapySelectTagGQL,
  TherapySelectTypeaheadFieldsFragment,
  TherapySelectTypeaheadGQL,
} from './therapy-select.query.gql.generated'

export type CvcTherapySelectFieldOptions = Partial<
  FieldTypeConfig<CvcTherapySelectFieldProps>
>

export type CvcTherapySelectFieldProps = CvcTypeGatedSelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcTherapySelectFieldConfig
  extends FormlyFieldConfig<CvcTherapySelectFieldProps> {
  type: 'therapy-select' | 'therapy-multi-select' | Type<CvcTherapySelectField>
}

@Component({
  selector: 'cvc-therapy-select',
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
    CvcTherapyQuickAddForm,
  ],
  templateUrl: './therapy-select.type.html',
  styleUrl: './therapy-select.type.less',
})
export class CvcTherapySelectField extends CvcTypeGatedSelectFieldBase<
  TherapySelectTypeaheadFieldsFragment,
  void,
  CvcTherapySelectFieldProps
> {
  private readonly typeaheadGQL = inject(TherapySelectTypeaheadGQL)
  private readonly tagGQL = inject(TherapySelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Therapy', plural: 'Therapies' },
    typename: 'Therapy',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.therapyTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.therapy,
    },
  })

  protected readonly typeGate: CvcTypeGateConfig = {
    requiresKey: 'requiresTherapy$',
    excludedDescription: (entityType, entityName) =>
      `${entityType} ${entityName} does not include associated therapies`,
  }

  defaultOptions: CvcTherapySelectFieldOptions = {
    props: {
      entityName: { singular: 'Therapy', plural: 'Therapies' },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'Therapy or therapy combination which interacts with the specified variant',
      placeholder: 'Search Therapies',
      requireTypePromptFn: (entityName: string) =>
        `Select an ${entityName} Type to search associated Therapies`,
    },
  }
}
