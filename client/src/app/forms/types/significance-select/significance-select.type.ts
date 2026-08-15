import {
  ChangeDetectionStrategy,
  Component,
  Type,
  effect,
  signal,
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcAttributeTagComponent } from '@app/forms/components/attribute-tag/attribute-tag.component'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { EntitySignificance, EntityType } from '@app/forms/states/base.state'
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
      SENSITIVITYRESPONSE:
        'Associated with a clinical or preclinical response to treatment',
      RESISTANCE:
        'Associated with clinical or preclinical resistance to treatment',
      ADVERSE_RESPONSE: 'Associated with an adverse response to drug treatment',
      REDUCED_SENSITIVITY:
        'Response to treatment is lower than seen in other treatment contexts',
      NA: 'Clinical Significance is not applicable.',
    },
    DIAGNOSTIC: {
      POSITIVE: 'Associated with diagnosis of disease or subtype',
      NEGATIVE: 'Associated with lack of disease or subtype',
    },
    PROGNOSTIC: {
      BETTER_OUTCOME: 'Demonstrates better than expected clinical outcome',
      POOR_OUTCOME: 'Demonstrates worse than expected clinical outcome',
      NA: 'Clinical Significance is not applicable.',
    },
    PREDISPOSING: {
      PREDISPOSITION:
        'Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.',
      PROTECTIVENESS:
        'Germline variant has properties that protect individuals from acquiring cancer.',
    },
    FUNCTIONAL: {
      GAIN_OF_FUNCTION:
        'Sequence variant confers an increase in normal gene function',
      LOSS_OF_FUNCTION:
        'Sequence variant confers a diminished or abolished function',
      UNALTERED_FUNCTION: 'Gene product of sequence variant is unchanged',
      NEOMORPHIC: 'Sequence variant creates a novel function',
      DOMINANT_NEGATIVE:
        'Sequence variant abrogates function of wildtype allele gene product',
      UNKNOWN:
        'Sequence variant that cannot be precisely defined by the other listed categories',
    },
    ONCOGENIC: {
      ONCOGENICITY:
        'Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.',
      PROTECTIVENESS: 'Somatic variant has a protective role against cancer.',
    },
  },
  Assertion: {
    PREDICTIVE: {
      SENSITIVITYRESPONSE:
        'Associated with a clinical or preclinical response to treatment',
      RESISTANCE:
        'Associated with clinical or preclinical resistance to treatment',
      ADVERSE_RESPONSE: 'Associated with an adverse response to drug treatment',
      REDUCED_SENSITIVITY:
        'Response to treatment is lower than seen in other treatment contexts',
      NA: 'Clinical Significance is not applicable.',
    },
    DIAGNOSTIC: {
      POSITIVE: 'Associated with diagnosis of disease or subtype',
      NEGATIVE: 'Associated with lack of disease or subtype',
    },
    PROGNOSTIC: {
      BETTER_OUTCOME: 'Demonstrates better than expected clinical outcome',
      POOR_OUTCOME: 'Demonstrates worse than expected clinical outcome',
      NA: 'Clinical Significance is not applicable.',
    },
    PREDISPOSING: {
      PATHOGENIC: 'Very strong evidence the variant is pathogenic',
      LIKELY_PATHOGENIC:
        'Strong evidence (>90% certainty) the variant is pathogenic.',
      BENIGN: 'Very strong evidence the variant is benign',
      LIKELY_BENIGN: 'Not expected to have a major effect on disease',
      UNCERTAIN_SIGNIFICANCE:
        'Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting',
    },
    ONCOGENIC: {
      ONCOGENIC: 'Very strong evidence the variant is oncogenic.',
      LIKELY_ONCOGENIC: 'Strong evidence the variant is oncogenic.',
      BENIGN:
        'Very strong evidence the variant does not have oncogenic properties.',
      LIKELY_BENIGN:
        'Strong evidence the variant does not have oncogenic properties.',
      UNCERTAIN_SIGNIFICANCE:
        'Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting.',
    },
  },
}

export type CvcSignificanceSelectFieldOptions = Partial<
  FieldTypeConfig<CvcSignificanceSelectFieldProps>
>

export interface CvcSignificanceSelectFieldProps
  extends CvcEnumSelectFieldProps {
  placeholderFn: (entityName: string, entityType?: string) => string
  requireTypePromptFn: (entityName: string) => string
}

export interface CvcSignificanceSelectFieldConfig
  extends FormlyFieldConfig<CvcSignificanceSelectFieldProps> {
  type: 'significance-select' | Type<CvcSignificanceSelectField>
}

/**
 * Which significances exist, and what each one means, both depend on the
 * form's entity type — so the options come from form state and the description
 * is looked up per (entity name, entity type, significance).
 */
@Component({
  selector: 'cvc-significance-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    CvcAttributeTagComponent,
  ],
  templateUrl: './significance-select.type.html',
})
export class CvcSignificanceSelectField extends CvcEnumSelectFieldBase<
  EntitySignificance,
  CvcSignificanceSelectFieldProps
> {
  defaultOptions: CvcSignificanceSelectFieldOptions = {
    props: {
      label: 'Significance',
      required: true,
      isMultiSelect: false,
      placeholder: 'Select Significance',
      placeholderFn: (entityName: string) =>
        `Select ${entityName ? entityName + ' ' : ''} Significance`,
      requireTypePromptFn: (entityName: string) =>
        `Select ${entityName} Type to select its Significance`,
      tooltip: 'Clinical impact of the variant',
    },
  }

  protected readonly placeholder = signal('Select Significance')

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

    this.placeholder.set(this.props.placeholderFn(state.entityName))

    if (!state.enums.significance$) {
      console.error(
        `${this.field.id} could not find form state's enums.significance$ to populate select.`
      )
    } else {
      this.connectStateEnum(state.enums.significance$)
    }

    const entityType = this.connectEntityTypeGate()
    effect(() => this.describe(entityType(), this.selected()), {
      injector: this.injector,
    })
  }

  private describe(
    entityType?: EntityType,
    significance?: EntitySignificance
  ): void {
    const state = this.state!
    if (!entityType) {
      this.props.disabled = true
      this.props.required = false
      this.props.description = this.props.requireTypePromptFn(state.entityName)
      this.props.extraType = 'prompt'
      this.markDirty()
      return
    }

    this.props.disabled = false
    this.props.required = true
    this.placeholder.set(this.props.placeholderFn(state.entityName))
    const text: Maybe<string> = significance
      ? optionText[state.entityName]?.[entityType]?.[significance]
      : undefined
    this.props.description = text
    this.props.extraType = text ? 'description' : undefined
    this.markDirty()
  }
}
