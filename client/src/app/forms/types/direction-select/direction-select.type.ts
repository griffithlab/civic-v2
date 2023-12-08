import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcInputEnum } from '@app/forms/forms.types'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EnumSelectField } from '@app/forms/mixins/enum-select-field.mixin'
import { EntityDirection } from '@app/forms/states/base.state'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, map, skip, withLatestFrom } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

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

export interface CvcDirectionSelectFieldProps extends FormlyFieldProps {
  label: string
  labelFn: (entityName: string) => string
  placeholder: string
  placeholderFn: (entityName: string, entityType?: string) => string
  isMultiSelect: boolean
  requireTypePromptFn: (entityName: string) => string
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcDirectionSelectFieldConfig
  extends FormlyFieldConfig<CvcDirectionSelectFieldProps> {
  type: 'direction-select' | Type<CvcDirectionSelectField>
}

const DirectionSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcDirectionSelectFieldProps>,
    Maybe<EntityDirection>
  >(),
  EnumSelectField<EntityDirection, CvcInputEnum>()
)

@Component({
  selector: 'cvc-direction-select',
  templateUrl: './direction-select.type.html',
  styleUrls: ['./direction-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDirectionSelectField
  extends DirectionSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. EntityDirection instead of CvcInputEnum
  // STATE SOURCE STREAMS
  directionEnum$: BehaviorSubject<CvcInputEnum[]>
  onEntityType$?: BehaviorSubject<Maybe<CvcInputEnum>>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$!: BehaviorSubject<string>

  // FieldTypeConfig defaults
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

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.directionEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.directionEnum$,
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
    this.props.label = this.props.labelFn(this.state.entityName)
    this.props.tooltip = `An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`

    // CONFIGURE PLACEHOLDER PROMPT
    this.placeholder$ = new BehaviorSubject<string>(
      this.props.placeholderFn(this.state.entityName)
    )

    // CONFIGURE STATE INPUTS
    // connect to state directionOptions$
    if (!this.state.enums.direction$) {
      console.error(
        `${this.field.id} could not find form state's direction$ to populate select.`
      )
      return
    }

    // update direction enums when state direction$ emits
    this.state.enums.direction$
      .pipe(untilDestroyed(this))
      .subscribe((enums: CvcInputEnum[]) => {
        this.directionEnum$.next(enums)
      })

    // set up optionTemplates Observable
    if (!this.optionTemplates) {
      console.info(
        `${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`
      )
    }

    this.optionTemplate$ = this.optionTemplates?.changes.pipe(
      // return QueryList's array of TemplateRefs
      map((ql: QueryList<TemplateRef<any>>) => {
        return ql.map((q) => q)
      })
    )

    // connect to state entityType$
    const etName = `${this.state.entityName.toLowerCase()}Type$`
    if (!this.state.fields[etName]) {
      console.error(
        `${this.field.id} could not find form state's ${etName} to populate Direction options.`
      )
      return
    }

    this.onEntityType$ = this.state.fields[etName]
    // if new entityType received, reset field, then based on entityType value, toggle disabled state, update placeholder
    this.onEntityType$
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
            this.props.placeholderFn(
              this.state!.entityName,
              formatEvidenceEnum(et)
            )
          )
        }
        if (this.formControl.value) this.formControl.setValue(undefined)
      })

    this.onValueChange$
      .pipe(withLatestFrom(this.onEntityType$), untilDestroyed(this))
      .subscribe(([ed, et]: [Maybe<CvcInputEnum>, Maybe<CvcInputEnum>]) => {
        if (!et || !ed || !this.state) return
        this.props.extraType = 'description'
        this.props.description = optionText[this.state.entityName][et][ed]
        this.field.formControl.markAsTouched()
      })
  }
}
