import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
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
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  AcmgCodeSelectTagGQL,
  AcmgCodeSelectTypeaheadFieldsFragment,
  AcmgCodeSelectTypeaheadGQL,
} from './acmg-code-select.query.gql.generated'

export type CvcAcmgCodeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcAcmgCodeSelectFieldProps>
>

export type CvcAcmgCodeSelectFieldProps = CvcTypeGatedSelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcAcmgCodeSelectFieldConfig
  extends FormlyFieldConfig<CvcAcmgCodeSelectFieldProps> {
  type:
    | 'acmg-code-select'
    | 'acmg-code-multi-select'
    | Type<CvcAcmgCodeSelectField>
}

@Component({
  selector: 'cvc-acmg-code-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcSelectMessagesComponent,
  ],
  templateUrl: './acmg-code-select.type.html',
  styleUrl: './acmg-code-select.type.less',
})
export class CvcAcmgCodeSelectField extends CvcTypeGatedSelectFieldBase<
  AcmgCodeSelectTypeaheadFieldsFragment,
  void,
  CvcAcmgCodeSelectFieldProps
> {
  private readonly typeaheadGQL = inject(AcmgCodeSelectTypeaheadGQL)
  private readonly tagGQL = inject(AcmgCodeSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'ACMG/AMP Code', plural: 'ACMG/AMP Codes' },
    typename: 'AcmgCode',
    typeahead: this.typeaheadGQL,
    // this query names its search variable code, not name
    typeaheadVars: (code: string) => ({ code }),
    typeaheadResults: (data) => data?.acmgCodesTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.acmgCode,
    },
  })

  protected readonly typeGate: CvcTypeGateConfig = {
    requiresKey: 'requiresAcmgCodes',
    excludedDescription: (entityType, entityName) =>
      `${entityType} ${entityName} does not include associated ACMG/AMP Code(s)`,
  }

  defaultOptions: CvcAcmgCodeSelectFieldOptions = {
    props: {
      entityName: { singular: 'ACMG/AMP Code', plural: 'ACMG/AMP Codes' },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.',
      placeholder: 'Search ACMG/AMP Codes',
      requireTypePromptFn: (entityName: string) =>
        `Select an ${entityName} Type to search associated ACMG Code(s)`,
    },
  }
}
