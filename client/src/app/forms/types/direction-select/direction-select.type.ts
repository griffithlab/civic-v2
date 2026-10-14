import {
  ChangeDetectionStrategy,
  Component,
  Type,
  effect,
  signal,
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcAttributeTagComponent } from '@app/forms/components/attribute-tag/attribute-tag.component'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { EntityDirection, EntityType } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'

const optionText: any = {
  Evidence: {
    PREDICTIVE: {
      SUPPORTS: "Experiment or study supports the variant's response to a drug",
      DOES_NOT_SUPPORT:
        'Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug',
    },
    DIAGNOSTIC: {
      SUPPORTS:
        "Experiment or study supports the variant's impact on the diagnosis of disease or subtype",
      DOES_NOT_SUPPORT:
        "Experiment or study does not support the variant's impact on diagnosis of disease or subtype",
    },
    PROGNOSTIC: {
      SUPPORTS:
        "Experiment or study supports the variant's impact on prognostic outcome",
      DOES_NOT_SUPPORT:
        'Experiment or study does not support a prognostic association between variant and outcome',
    },
    PREDISPOSING: {
      SUPPORTS:
        'Suggests a pathogenic or a protective role for a germline variant in cancer',
      DOES_NOT_SUPPORT:
        'Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer.',
    },
    FUNCTIONAL: {
      SUPPORTS:
        'Experiment or study supports the variant causing alteration or non-alteration of the gene product function',
      DOES_NOT_SUPPORT:
        'Experiment or study does not support the variant causing alteration or non-alteration of the gene product function',
    },
    ONCOGENIC: {
      NA: 'Not Applicable for Oncogenic Evidence Type.',
      SUPPORTS:
        'Supports an oncogenic or protective role for a somatic variant.',
      DOES_NOT_SUPPORT:
        'Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer.',
    },
  },
  Assertion: {
    PREDICTIVE: {
      SUPPORTS: "Supports the variant's response to a drug",
      DOES_NOT_SUPPORT:
        'Does not support, or was inconclusive of an interaction between the variant and a drug',
    },
    DIAGNOSTIC: {
      SUPPORTS:
        "Supports the variant's impact on the diagnosis of disease or subtype",
      DOES_NOT_SUPPORT:
        "Does not support the variant's impact on diagnosis of disease or subtype",
    },
    PROGNOSTIC: {
      SUPPORTS: "Supports the variant's impact on prognostic outcome",
      DOES_NOT_SUPPORT:
        'Does not support a prognostic association between variant and outcome',
    },
    PREDISPOSING: {
      SUPPORTS:
        'Suggests a pathogenic or a protective role for a germline variant in cancer',
      DOES_NOT_SUPPORT:
        'Does not support an association between the variant and disease causation',
    },
    FUNCTIONAL: {
      SUPPORTS:
        'Supports the variant causing alteration or non-alteration of the gene product function',
      DOES_NOT_SUPPORT:
        'Does not support the variant causing alteration or non-alteration of the gene product function',
    },
    ONCOGENIC: {
      SUPPORTS:
        'Supports an oncogenic or protective role for a somatic variant',
      DOES_NOT_SUPPORT:
        'Does not support an association between the variant and disease causation',
    },
  },
}

export type CvcDirectionSelectFieldOptions = Partial<
  FieldTypeConfig<CvcDirectionSelectFieldProps>
>

export interface CvcDirectionSelectFieldProps extends CvcEnumSelectFieldProps {
  labelFn: (entityName: string) => string
  placeholderFn: (entityName: string, entityType?: string) => string
  requireTypePromptFn: (entityName: string) => string
}

export interface CvcDirectionSelectFieldConfig
  extends FormlyFieldConfig<CvcDirectionSelectFieldProps> {
  type: 'direction-select' | Type<CvcDirectionSelectField>
}

/**
 * Which directions exist, and what each one means, both depend on the form's
 * entity type — so the options come from form state and the description is
 * looked up per (entity name, entity type, direction).
 */
@Component({
  selector: 'cvc-direction-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    CvcAttributeTagComponent,
  ],
  templateUrl: './direction-select.type.html',
})
export class CvcDirectionSelectField extends CvcEnumSelectFieldBase<
  EntityDirection,
  CvcDirectionSelectFieldProps
> {
  defaultOptions: CvcDirectionSelectFieldOptions = {
    props: {
      label: 'Direction',
      labelFn: (entityName: string) => `${entityName} Direction`,
      required: true,
      isMultiSelect: false,
      placeholder: 'Select Entity Direction',
      placeholderFn: (entityName: string, entityType?: string) =>
        `Select ${entityType ? entityType + ' ' : ''}${entityName} Direction`,
      requireTypePromptFn: (entityName: string) =>
        `Select ${entityName} Type to select its Direction`,
    },
  }

  protected readonly placeholder = signal('Select Entity Direction')

  override ngOnInit(): void {
    super.ngOnInit()
    const state = this.state
    if (!state) {
      console.error(
        `${this.field.id} requires a form state to populate its options, none was found.`
      )
      this.placeholder.set('ERROR: Form state not found')
      return
    }

    this.props.label = this.props.labelFn(state.entityName)
    this.props.tooltip = `An indicator of whether the ${state.entityName} statement supports or refutes the clinical significance of an event.`
    this.placeholder.set(this.props.placeholderFn(state.entityName))

    if (!state.enums.direction$) {
      console.error(
        `${this.field.id} could not find form state's direction$ to populate select.`
      )
    } else {
      this.connectStateEnum(state.enums.direction$)
    }

    const entityType = this.connectEntityTypeGate()
    effect(() => this.describe(entityType(), this.selected()), {
      injector: this.injector,
    })
  }

  private describe(
    entityType?: EntityType,
    direction?: EntityDirection
  ): void {
    const state = this.state!
    if (!entityType) {
      this.props.disabled = true
      this.props.description = this.props.requireTypePromptFn(state.entityName)
      this.props.extraType = 'prompt'
      this.markDirty()
      return
    }

    this.props.disabled = false
    this.placeholder.set(
      this.props.placeholderFn(state.entityName, formatEvidenceEnum(entityType))
    )
    const text: Maybe<string> = direction
      ? optionText[state.entityName]?.[entityType]?.[direction]
      : undefined
    this.props.description = text
    this.props.extraType = text ? 'description' : undefined
    this.markDirty()
  }
}
