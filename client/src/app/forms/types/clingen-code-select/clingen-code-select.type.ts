import {
  ChangeDetectionStrategy,
  Component,
  Type,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcSelectMessagesComponent,
  CvcTypeGateConfig,
  CvcTypeGatedSelectFieldBase,
  CvcTypeGatedSelectFieldProps,
  entitySelectConfig,
} from '@app/forms/select'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  ClingenCodeSelectTagGQL,
  ClingenCodeSelectTypeaheadFieldsFragment,
  ClingenCodeSelectTypeaheadGQL,
} from './clingen-code-select.query.gql.generated'

export type CvcClingenCodeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcClingenCodeSelectFieldProps>
>

export type CvcClingenCodeSelectFieldProps = CvcTypeGatedSelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcClingenCodeSelectFieldConfig
  extends FormlyFieldConfig<CvcClingenCodeSelectFieldProps> {
  type:
    | 'clingen-code-select'
    | 'clingen-code-multi-select'
    | Type<CvcClingenCodeSelectField>
}

const EXCLUSIVE_NOTICE =
  'You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.'

@Component({
  selector: 'cvc-clingen-code-select',
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
  templateUrl: './clingen-code-select.type.html',
  styleUrl: './clingen-code-select.type.less',
})
export class CvcClingenCodeSelectField extends CvcTypeGatedSelectFieldBase<
  ClingenCodeSelectTypeaheadFieldsFragment,
  void,
  CvcClingenCodeSelectFieldProps
> {
  private readonly typeaheadGQL = inject(ClingenCodeSelectTypeaheadGQL)
  private readonly tagGQL = inject(ClingenCodeSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: {
      singular: 'ClinGen/CGC/VICC Code',
      plural: 'ClinGen/CGC/VICC Codes',
    },
    typename: 'ClingenCode',
    typeahead: this.typeaheadGQL,
    // this query names its search variable code, not name
    typeaheadVars: (code: string) => ({ code }),
    typeaheadResults: (data) => data?.clingenCodesTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.clingenCode,
    },
  })

  protected readonly typeGate: CvcTypeGateConfig = {
    requiresKey: 'requiresClingenCodes$',
    excludedDescription: (entityType, entityName) =>
      `${entityType} ${entityName} does not include associated ClinGen/CGC/VICC Code(s)`,
  }

  defaultOptions: CvcClingenCodeSelectFieldOptions = {
    props: {
      entityName: {
        singular: 'ClinGen/CGC/VICC Code',
        plural: 'ClinGen/CGC/VICC Codes',
      },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).',
      placeholder: 'Search ClinGen/CGC/VICC Codes',
      requireTypePromptFn: (entityName: string) =>
        `Select an ${entityName} Type to search associated ClinGen Code(s)`,
    },
  }

  /**
   * Codes that preclude every other code (N/A). Accumulated as results arrive
   * rather than read off the current result list, because the selection can
   * outlive the search that produced it.
   */
  private readonly exclusiveIds = signal<ReadonlySet<number>>(new Set())

  /** whether an exclusive code is currently selected */
  private exclusiveActive = false
  /** what the type gate last wanted the description to say */
  private gateDescription?: string
  private gateExtraType?: CvcFormFieldExtraType

  constructor() {
    super()
    effect(() => this.rememberExclusive(this.results()))
    effect(() => this.enforceExclusive(this.value()))
  }

  private rememberExclusive(
    results: readonly ClingenCodeSelectTypeaheadFieldsFragment[]
  ): void {
    const known = untracked(this.exclusiveIds)
    const updated = new Set(known)
    for (const result of results) {
      if (result.exclusive) updated.add(result.id)
    }
    if (updated.size !== known.size) this.exclusiveIds.set(updated)
  }

  /**
   * Selecting N/A alongside other codes collapses the selection to N/A alone.
   * The old field only re-evaluated when more than one code was selected, so
   * the notice survived deselecting N/A; here it simply tracks whether an
   * exclusive code is in the current selection.
   */
  private enforceExclusive(value: unknown): void {
    const ids = Array.isArray(value) ? (value as number[]) : []
    const exclusive = ids.find((id) => this.exclusiveIds().has(id))

    const active = exclusive !== undefined
    if (active !== this.exclusiveActive) {
      this.exclusiveActive = active
      this.applyDescription()
      this.cdr.markForCheck()
    }

    if (exclusive !== undefined && ids.length > 1) {
      this.formControl.setValue([exclusive])
    }
  }

  protected override onTypeGateApplied(): void {
    this.gateDescription = this.props.description
    this.gateExtraType = this.props.extraType
    this.applyDescription()
  }

  /** the exclusive notice outranks whatever the type gate wanted to say */
  private applyDescription(): void {
    if (this.exclusiveActive) {
      this.props.description = EXCLUSIVE_NOTICE
      this.props.extraType = 'prompt'
    } else {
      this.props.description = this.gateDescription
      this.props.extraType = this.gateExtraType
    }
  }
}
