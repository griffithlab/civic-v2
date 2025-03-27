import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
import { EvidenceLevel, Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, map, filter, take } from 'rxjs'
import { $enum } from 'ts-enum-util'
import mixin from 'ts-mixin-extended'

const optionText = new Map<EvidenceLevel, string>([
  [EvidenceLevel.A, 'Evidence shows consensus association in human medicine'],
  [
    EvidenceLevel.B,
    'Evidence supports association using clinical trial or other primary patient data',
  ],
  [
    EvidenceLevel.C,
    'Evidence supports association using individual case reports from clinical journals',
  ],
  [
    EvidenceLevel.D,
    'Evidence supports association using in vivo or in vitro models',
  ],
  [EvidenceLevel.E, 'Evidential association is inferential or indirect'],
])

export type CvcLevelSelectFieldOptions = Partial<
  FieldTypeConfig<CvcLevelSelectFieldProps>
>

export interface CvcLevelSelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  isMultiSelect: boolean
  description?: string
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcLevelSelectFieldConfig
  extends FormlyFieldConfig<CvcLevelSelectFieldProps> {
  type: 'level-select' | Type<CvcLevelSelectField>
}

const LevelSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcLevelSelectFieldProps>,
    Maybe<EvidenceLevel>
  >(),
  EnumSelectField<EvidenceLevel, CvcInputEnum>()
)

@Component({
    selector: 'cvc-level-select',
    templateUrl: './level-select.type.html',
    styleUrls: ['./level-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcLevelSelectField
  extends LevelSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. EvidenceLevel instead of CvcInputEnum
  // STATE SOURCE STREAMS
  levelEnum$: BehaviorSubject<CvcInputEnum[]>

  // FieldTypeConfig defaults
  defaultOptions: CvcLevelSelectFieldOptions = {
    props: {
      label: 'Evidence Level',
      required: false,
      isMultiSelect: false,
      placeholder: 'Select Evidence Level',
      extraType: 'description',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.levelEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    if (this.state && this.state.formReady$) {
      this.state.formReady$
        .pipe(
          filter((r) => r), // only pass true values
          take(1), // unsubscribe after 1st emit
          untilDestroyed(this) // or form destroyed
        )
        .subscribe((_) => {
          this.configureField()
        })
    } else {
      this.configureField()
    }
  }

  configureField(): void {
    this.props.tooltip =
      'Type of study performed to produce the evidence statement'

    this.levelEnum$.next($enum(EvidenceLevel).map((level) => level))

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

    // update field description on value changes
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((level: Maybe<EvidenceLevel>) => {
        if (!level) {
          this.props.description = undefined
        } else {
          this.props.description = optionText.get(level)
          this.field.formControl.markAsTouched()
        }
      })
    this.configureEnumSelectField({
      optionEnum$: this.levelEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
  }
}
