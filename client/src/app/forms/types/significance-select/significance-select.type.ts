import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { CvcInputEnum } from '@app/forms/forms.types'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EnumSelectField } from '@app/forms/mixins/enum-select-field.mixin'
import { EntitySignificance } from '@app/forms/states/base.state'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, map, skip, withLatestFrom } from 'rxjs'
import mixin from 'ts-mixin-extended'

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

interface CvcSignificanceSelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  placeholderFn: (entityName: string, entityType?: string) => string
  requireTypePromptFn: (entityName: string) => string
  isMultiSelect: boolean
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcSignificanceSelectFieldConfig
  extends FormlyFieldConfig<CvcSignificanceSelectFieldProps> {
  type: 'significance-select' | Type<CvcSignificanceSelectField>
}

const SignificanceSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcSignificanceSelectFieldProps>,
    Maybe<EntitySignificance>
  >(),
  EnumSelectField<EntitySignificance, CvcInputEnum>()
)

@Component({
  selector: 'cvc-significance-select',
  templateUrl: './significance-select.type.html',
  styleUrls: ['./significance-select.type.less'],
  standalone: false,
})
export class CvcSignificanceSelectField
  extends SignificanceSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. EntitySignificance instead of CvcInputEnum
  // STATE SOURCE STREAMS
  significanceEnum$: BehaviorSubject<CvcInputEnum[]>
  onTypeSelect$?: BehaviorSubject<Maybe<CvcInputEnum>>

  // LOCAL SOURCE STREAMS

  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$!: BehaviorSubject<string>

  // FieldTypeConfig defaults
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

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.significanceEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.significanceEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) {
      console.error(
        `${this.field.id} requires a form state to populate its options, none was found.`
      )
      this.placeholder$ = new BehaviorSubject<string>(
        'ERROR: Form state not found'
      )
      return
    }

    // CONFIGURE PLACEHOLDER PROMPT
    this.placeholder$ = new BehaviorSubject<string>(
      this.props.placeholderFn(this.state.entityName)
    )

    // CONFIGURE STATE INPUTS
    // connect to state significanceOptions$
    if (!this.state.enums.significance$) {
      console.error(
        `${this.field.id} could not find form state's enums.significance$ to populate select.`
      )
      return
    }
    this.state.enums.significance$
      .pipe(untilDestroyed(this))
      .subscribe((enums: CvcInputEnum[]) => {
        this.significanceEnum$.next(enums)
      })

    // set up optionTemplate$ Observable for enum-select's cvcOptions
    if (!this.optionTemplates) {
      console.warn(
        `${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`
      )
    }
    // watch optionTemplates ViewChildren, map QueryList => TemplateRef[]
    this.optionTemplate$ = this.optionTemplates?.changes.pipe(
      // return QueryLists's array of TemplateRefs
      map((ql: QueryList<TemplateRef<any>>) => {
        return ql.map((q) => q)
      })
    )

    // connect to form state's entityType$
    const etName = `${this.state.entityName.toLowerCase()}Type$`
    if (!this.state.fields[etName]) {
      console.error(
        `${this.field.id} could not find form state's ${etName} to populate Significance options.`
      )
      return
    }
    this.onTypeSelect$ = this.state.fields[etName]
    // if new entityType received, reset field, then based on entityType value, toggle disabled state, update placeholder
    this.onTypeSelect$
      .pipe(
        skip(this.options.formState.formMode === 'add' ? 0 : 1),
        untilDestroyed(this)
      )
      .subscribe((et: Maybe<CvcInputEnum>) => {
        if (!et) {
          this.props.disabled = true
          this.props.description = this.props.requireTypePromptFn(
            this.state!.entityName
          )
          this.props.extraType = 'prompt'
        } else {
          this.props.disabled = false
          this.props.description = undefined
          this.props.extraType = undefined
          this.placeholder$.next(
            this.props.placeholderFn(this.state!.entityName)
          )
        }
        if (this.formControl.value) this.formControl.setValue(undefined)
      })

    // update field description on value changes
    this.onValueChange$
      .pipe(withLatestFrom(this.onTypeSelect$), untilDestroyed(this))
      .subscribe(([cs, et]: [Maybe<CvcInputEnum>, Maybe<CvcInputEnum>]) => {
        if (!et || !cs || !this.state) return
        this.props.description = undefined
        this.props.extraType = 'description'
        this.props.description = optionText[this.state.entityName][et][cs]
        this.field.formControl.markAsTouched()
      })
  }
}
