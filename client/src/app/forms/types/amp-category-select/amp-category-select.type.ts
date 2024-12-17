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
import { AmpLevel, Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs'
import { $enum } from 'ts-enum-util'
import mixin from 'ts-mixin-extended'

const optionText = new Map<AmpLevel, string>([
  [AmpLevel.Na, 'Not Applicable'],
  [
    AmpLevel.TierILevelA,
    'Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines.',
  ],
  [
    AmpLevel.TierILevelB,
    'Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field.',
  ],
  [
    AmpLevel.TierIiLevelC,
    'FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus.',
  ],
  [
    AmpLevel.TierIiLevelD,
    'Biomarkers that show plausible therapeutic significance based on preclinical studies.',
  ],
  [
    AmpLevel.TierIii,
    'Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers.',
  ],
  [
    AmpLevel.TierIv,
    'Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation.',
  ],
])

export type CvcAmpCategorySelectFieldOptions = Partial<
  FieldTypeConfig<CvcAmpCategorySelectFieldProps>
>

export interface CvcAmpCategorySelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  isMultiSelect: boolean
  description?: string
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcAmpCategorySelectFieldConfig
  extends FormlyFieldConfig<CvcAmpCategorySelectFieldProps> {
  type: 'level-select' | Type<CvcAmpCategorySelectField>
}

const AmpCategorySelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcAmpCategorySelectFieldProps>,
    Maybe<AmpLevel>
  >(),
  EnumSelectField<AmpLevel, CvcInputEnum>()
)

@Component({
  selector: 'cvc-amp-category-select',
  templateUrl: './amp-category-select.type.html',
  styleUrls: ['./amp-category-select.type.less'],
  standalone: false,
})
export class CvcAmpCategorySelectField
  extends AmpCategorySelectMixin
  implements AfterViewInit
{
  //TODO: implement more precise types so specific enum-selects like this one can specify their enums, e.g. EvidenceLevel instead of CvcInputEnum
  // STATE SOURCE STREAMS
  ampCategoryEnum$: BehaviorSubject<CvcInputEnum[]>
  onRequiresAmpCategory$?: BehaviorSubject<boolean>

  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS
  placeholder$!: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcAmpCategorySelectFieldOptions = {
    props: {
      label: 'AMP/ASCO/CAP Category',
      required: false,
      isMultiSelect: false,
      placeholder: 'Select AMP/ASCO/CAP Category',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.ampCategoryEnum$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  descriptionForCategory(cat: Maybe<CvcInputEnum>): Maybe<string> {
    return optionText.get(cat as AmpLevel)
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEnumSelectField({
      optionEnum$: this.ampCategoryEnum$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
    this.configurePlaceholder()
  }

  configureStateConnections(): void {
    //TODO - html linkout to https://pubmed.ncbi.nlm.nih.gov/27993330/
    this.props.tooltip =
      'If applicable, please provide the AMP/ASCO/CAP somatic variant classification.'

    this.ampCategoryEnum$.next($enum(AmpLevel).map((level) => level))

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

    if (!this.state) return
    if (!this.state.requires.requiresAmpLevel$) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`
      )
    } else {
      this.onRequiresAmpCategory$ = this.state.requires.requiresAmpLevel$
    }

    // update field description on value changes
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((level: Maybe<AmpLevel>) => {
        if (!level) {
          this.props.description =
            'Select an Assertion Type to select its AMP Category'
        } else {
          this.props.extraType = undefined
          this.props.description = optionText.get(level)
        }
      })
  }

  configurePlaceholder(): void {
    this.placeholder$ = new BehaviorSubject<string>(this.props.placeholder)

    if (!this.onRequiresAmpCategory$) return

    this.onRequiresAmpCategory$
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((requiresAmp) => {
        this.props.extraType = undefined
        if (requiresAmp) {
          if (!this.formControl.value) {
            this.props.extraType = 'description'
            this.props.description =
              'Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'
          }
          this.props.required = true
          this.props.disabled = false
        } else {
          this.props.required = false
          this.props.disabled = true
          //this.placeholder$.next()
          this.resetField()
        }
        this.cdr.markForCheck()
      })
  }
}
