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
import { Maybe, ReferenceBuild } from '@app/generated/civic.apollo'
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
  FieldTypeConfig<CvcReferenceBuildSelectFieldProps>
>

export interface CvcReferenceBuildSelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  isMultiSelect: boolean
  description?: string
  tooltip?: string
}

export interface CvcLevelSelectFieldConfig
  extends FormlyFieldConfig<CvcReferenceBuildSelectFieldProps> {
  type: 'level-select' | Type<CvcReferenceBuildSelectField>
}

const ReferenceBuildSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcReferenceBuildSelectFieldProps>,
    Maybe<ReferenceBuild>
  >(),
  EnumSelectField<ReferenceBuild, CvcInputEnum>()
)

@Component({
    selector: 'cvc-reference-build-select',
    templateUrl: './reference-build-select.type.html',
    styleUrls: ['./reference-build-select.type.less'],
    standalone: false
})
export class CvcReferenceBuildSelectField
  extends ReferenceBuildSelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. EvidenceLevel instead of CvcInputEnum
  // STATE SOURCE STREAMS
  buildEnum$: BehaviorSubject<CvcInputEnum[]>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$!: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcLevelSelectFieldOptions = {
    props: {
      label: 'Reference Build',
      required: false,
      isMultiSelect: false,
      description: 'Select the human genome reference sequence from which these coordinates are obtained',
      placeholder: 'Select Reference Build',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.buildEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.buildEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
  }

  configureStateConnections(): void {

    this.placeholder$ = new BehaviorSubject<string>(this.props.placeholder)

    this.buildEnum$.next($enum(ReferenceBuild).map((level) => level))

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
