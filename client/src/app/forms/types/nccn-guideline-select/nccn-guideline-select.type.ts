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
  NccnGuidelineSelectTagGQL,
  NccnGuidelineSelectTypeaheadFieldsFragment,
  NccnGuidelineSelectTypeaheadGQL,
} from './nccn-guideline-select.query.gql.generated'

export type CvcNccnGuidelineSelectFieldOptions = Partial<
  FieldTypeConfig<CvcNccnGuidelineSelectFieldProps>
>

export type CvcNccnGuidelineSelectFieldProps = CvcEntitySelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcNccnGuidelineSelectFieldConfig
  extends FormlyFieldConfig<CvcNccnGuidelineSelectFieldProps> {
  type:
    | 'nccn-guideline-select'
    | 'nccn-guideline-multi-select'
    | Type<CvcNccnGuidelineSelectField>
}

@Component({
  selector: 'cvc-nccn-guideline-select',
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
  templateUrl: './nccn-guideline-select.type.html',
  styleUrl: './nccn-guideline-select.type.less',
})
export class CvcNccnGuidelineSelectField extends CvcEntitySelectFieldBase<
  NccnGuidelineSelectTypeaheadFieldsFragment,
  void,
  CvcNccnGuidelineSelectFieldProps
> {
  private readonly typeaheadGQL = inject(NccnGuidelineSelectTypeaheadGQL)
  private readonly tagGQL = inject(NccnGuidelineSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'NCCN Guideline', plural: 'NCCN Guidelines' },
    typename: 'NccnGuideline',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.nccnGuidelinesTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.nccnGuideline,
    },
  })

  defaultOptions: CvcNccnGuidelineSelectFieldOptions = {
    props: {
      entityName: { singular: 'NCCN Guideline', plural: 'NCCN Guidelines' },
      isMultiSelect: false,
      tooltip:
        'If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.',
      placeholder: 'Search NCCN Guidelines',
    },
  }
}
