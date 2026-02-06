import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { CvcInputEnum } from '@app/forms/forms.types'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EnumSelectField } from '@app/forms/mixins/enum-select-field.mixin'
import { FeatureSelectTypeaheadFieldsFragment, Maybe, ReferenceBuild, RegionVariantName, RegionVariantNameForFeatureGQL } from '@app/generated/civic.apollo'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal'
import { BehaviorSubject, from, lastValueFrom, map} from 'rxjs'
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

export interface RegionVariantSelectModalData {
  feature?: FeatureSelectTypeaheadFieldsFragment
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
  readonly nzModalData: RegionVariantSelectModalData = inject(NZ_MODAL_DATA)

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

  constructor(
    private cdr: ChangeDetectorRef,
    private variantQuery: RegionVariantNameForFeatureGQL,
  ) {
    super()
    this.nameEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
    this.nameEnum$.next($enum(RegionVariantName).map((level) => level))
    if (this.nzModalData.feature?.id) {
      const fid = this.nzModalData.feature?.id
      lastValueFrom(
        this.variantQuery.fetch(
          { featureId: fid },
          { fetchPolicy: 'cache-first' }
        )
      ).then(({data}) => {
        if (!data || !data.regionVariantNamesForFeatureId) {
          console.error(
            `${this.field.id} could not fetch variant names for Feature:${fid}.`
          )
        } else {
          this.nameEnum$.next(data.regionVariantNamesForFeatureId.map((level) => level))
        }
      })
    }
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
