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
import { Maybe, VariantOrigin } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, map } from 'rxjs'
import mixin from 'ts-mixin-extended'

const optionMap = new Map<VariantOrigin, string>([
  [
    VariantOrigin.Somatic,
    'Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring.',
  ],
  [
    VariantOrigin.RareGermline,
    'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item.',
  ],
  [
    VariantOrigin.CommonGermline,
    'Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item.',
  ],
  [
    VariantOrigin.Combined,
    'Variants in the corresponding Complex Molecular Profile have heterogeneous origins.',
  ],
  [
    VariantOrigin.Mixed,
    'The population of patient variants described in the Evidence is a mixture of Somatic and Germline.',
  ],
  [
    VariantOrigin.Unknown,
    'The variant origin is uncertain based on the available evidence.',
  ],
  [
    VariantOrigin.Na,
    'The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin.',
  ],
])

export type CvcOriginSelectFieldOptions = Partial<
  FieldTypeConfig<CvcOriginSelectFieldProps>
>

export interface CvcOriginSelectFieldProps extends FormlyFieldProps {
  label: string
  isMultiSelect: boolean
  description?: string
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcOriginSelectFieldConfig
  extends FormlyFieldConfig<CvcOriginSelectFieldProps> {
  type: 'origin-select' | Type<CvcOriginSelectField>
}

const OriginSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcOriginSelectFieldProps>,
    Maybe<VariantOrigin>
  >(),
  EnumSelectField<VariantOrigin, CvcInputEnum>()
)

@Component({
  selector: 'cvc-origin-select',
  templateUrl: './origin-select.type.html',
  styleUrls: ['./origin-select.type.less'],
  standalone: false,
})
export class CvcOriginSelectField
  extends OriginSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. VariantOrigin instead of CvcInputEnum
  // STATE SOURCE STREAMS
  originEnum$: BehaviorSubject<CvcInputEnum[]>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS

  // FieldTypeConfig defaults
  defaultOptions: CvcOriginSelectFieldOptions = {
    props: {
      label: 'Variant Origin',
      required: false,
      isMultiSelect: false,
      placeholder: 'Select Variant Origin',
      tooltip: `Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study`,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.originEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.originEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })

    // populate select options
    this.originEnum$.next(Array.from(optionMap.keys()))
  }

  configureStateConnections(): void {
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

    // update field value description
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((origin: Maybe<VariantOrigin>) => {
        if (!origin) {
          this.props.description = undefined
          this.props.extraType = 'prompt'
        } else {
          this.props.description = optionMap.get(origin)
          this.props.extraType = 'description'
        }
      })
  }
}
