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
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { TherapyInteraction, Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, map } from 'rxjs'
import mixin from 'ts-mixin-extended'

const optionText: { [option: string]: string } = {
  COMBINATION:
    'Therapies specified were used as part of a combination therapy approach',
  SEQUENTIAL:
    'Therapies specified were used at separate timepoints in the same treatment plan',
  SUBSTITUTES:
    'Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting',
}

export type CvcInteractionSelectFieldOptions = Partial<
  FieldTypeConfig<CvcInteractionSelectFieldProps>
>

interface CvcInteractionSelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  requireMultipleTherapies: boolean
  requireMultipleTherapiesPromptFn: () => string
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcInteractionSelectFieldConfig
  extends FormlyFieldConfig<CvcInteractionSelectFieldProps> {
  type: 'interaction-select' | Type<CvcInteractionSelectField>
}

const InteractionSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcInteractionSelectFieldProps>,
    Maybe<TherapyInteraction>
  >(),
  EnumSelectField<TherapyInteraction, CvcInputEnum>()
)

@Component({
    selector: 'cvc-interaction-select',
    templateUrl: './interaction-select.type.html',
    styleUrls: ['./interaction-select.type.less'],
    standalone: false
})
export class CvcInteractionSelectField
  extends InteractionSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. TherapyInteraction instead of CvcInputEnum
  // STATE SOURCE STREAMS
  interactionEnum$: BehaviorSubject<CvcInputEnum[]>
  onTherapies$?: BehaviorSubject<Maybe<number[]>>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$!: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: CvcInteractionSelectFieldOptions = {
    props: {
      label: 'Therapy Interaction',
      placeholder: 'Select Therapy Interaction',
      requireMultipleTherapies: true,
      requireMultipleTherapiesPromptFn: () =>
        `A single associated therapy does not have an Interaction type`,
      tooltip: 'Characterizes the interaction of a multi-therapy treatment',
      
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.interactionEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.interactionEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) {
      console.error(
        `${this.field.id} requires a form state to populate its options, none was found.`
      )
      this.placeholder$.next('ERROR: Form state not found')
      return
    }

    // CONFIGURE PLACEHOLDER PROMPT
    this.placeholder$.next(this.props.placeholder)

    // CONFIGURE STATE INPUTS
    // connect to state clinicalInteractionOptions$
    if (!this.state.enums.interaction$) {
      console.error(
        `${this.field.id} could not find form state's interaction$ to populate select.`
      )
      return
    }
    // update interaction enums when state clinicalInteraction$ emits
    this.state.enums.interaction$
      .pipe(untilDestroyed(this))
      .subscribe((enums: CvcInputEnum[]) => {
        this.interactionEnum$.next(enums)
      })

    // set up optionTemplates Observable
    if (!this.optionTemplates) {
      console.error(
        `${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`
      )
    }
    this.optionTemplate$ = this.optionTemplates?.changes.pipe(
      // return QueryLists's array of TemplateRefs
      map((ql: QueryList<TemplateRef<any>>) => {
        return ql.map((q) => q)
      })
    )

    this.onTherapies$ = this.state.fields.therapyIds$
    if (!this.optionTemplates) {
      console.warn(
        `${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`
      )
    }

    this.onTherapies$
      .pipe(untilDestroyed(this))
      .subscribe((therapies: Maybe<number[]>) => {
        if (!therapies || therapies.length == 0) {
          this.props.disabled = true
          this.props.required = false
          this.props.description =
            'Interaction type is not applicable when no therapies are selected.'
          if (this.formControl.value !== undefined) {
            this.formControl.setValue(undefined)
          }
        } else if (therapies.length == 1) {
          this.props.description =
            'A single associated therapy does not have an Interaction type'
          this.props.disabled = true
          this.props.required = false
          if (this.formControl.value !== undefined) {
            this.formControl.setValue(undefined)
          }
        } else {
          this.props.description = 'Select an Interaction Type'
          this.props.disabled = false
          this.props.required = true
        }
        this.cdr.markForCheck()
      })

    // update field description on value changes
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((interaction: Maybe<TherapyInteraction>) => {
        if (interaction) {
          this.props.description = optionText[interaction]
          this.props.extraType = 'description'
        } else {
          this.props.extraType = 'prompt'
          this.field.formControl.markAsTouched()
        }
      })
  }
}
