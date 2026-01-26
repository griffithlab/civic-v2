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
import { Maybe, ReferenceBuild, RegionVariantName } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, from, map, withLatestFrom } from 'rxjs'
import { $enum } from 'ts-enum-util'
import mixin from 'ts-mixin-extended'

export type CvcLevelSelectFieldOptions = Partial<
  FieldTypeConfig<CvcRegionVariantNameSelectFieldProps>
>

export interface CvcRegionVariantNameSelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  isMultiSelect: boolean
  description?: string
  tooltip?: string
}

export interface CvcLevelSelectFieldConfig
  extends FormlyFieldConfig<CvcRegionVariantNameSelectFieldProps> {
  type: 'level-select' | Type<CvcRegionVariantNameSelectField>
}

const RegionVariantNameSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcRegionVariantNameSelectFieldProps>,
    Maybe<RegionVariantName>
  >(),
  EnumSelectField<ReferenceBuild, CvcInputEnum>()
)

@Component({
    selector: 'cvc-region-variant-name-select',
    templateUrl: './region-variant-name-select.type.html',
    styleUrls: ['./region-variant-name-select.type.less'],
    standalone: false
})
export class CvcRegionVariantNameSelectField
  extends RegionVariantNameSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. EvidenceLevel instead of CvcInputEnum
  // STATE SOURCE STREAMS
  nameEnum$: BehaviorSubject<CvcInputEnum[]>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$!: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcLevelSelectFieldOptions = {
    props: {
      label: 'Variant Name',
      required: true,
      isMultiSelect: false,
      description: 'Select the desired region variant name',
      placeholder: 'Select Variant Name',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.nameEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.nameEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
  }

  configureStateConnections(): void {

    this.placeholder$ = new BehaviorSubject<string>(this.props.placeholder)

    this.nameEnum$.next($enum(RegionVariantName).map((level) => level))

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
  }
}
