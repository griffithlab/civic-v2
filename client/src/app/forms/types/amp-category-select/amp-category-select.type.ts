import { ChangeDetectionStrategy, Component, Type, effect } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { AmpLevel } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

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

/** curators read the tiers in order, with Not Applicable last */
const OPTION_ORDER: AmpLevel[] = [
  AmpLevel.TierILevelA,
  AmpLevel.TierILevelB,
  AmpLevel.TierIiLevelC,
  AmpLevel.TierIiLevelD,
  AmpLevel.TierIii,
  AmpLevel.TierIv,
  AmpLevel.Na,
]

const CLASSIFICATION_PROMPT =
  'Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'

const REQUIRES_TYPE_PROMPT =
  'Select an Assertion Type to select its AMP Category'

export type CvcAmpCategorySelectFieldOptions = Partial<
  FieldTypeConfig<CvcAmpCategorySelectFieldProps>
>

export interface CvcAmpCategorySelectFieldProps
  extends CvcEnumSelectFieldProps {}

export interface CvcAmpCategorySelectFieldConfig
  extends FormlyFieldConfig<CvcAmpCategorySelectFieldProps> {
  type: 'amp-category-select' | Type<CvcAmpCategorySelectField>
}

@Component({
  selector: 'cvc-amp-category-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTagModule,
    NzTypographyModule,
    CvcPipesModule,
  ],
  templateUrl: './amp-category-select.type.html',
})
export class CvcAmpCategorySelectField extends CvcEnumSelectFieldBase<
  AmpLevel,
  CvcAmpCategorySelectFieldProps
> {
  defaultOptions: CvcAmpCategorySelectFieldOptions = {
    props: {
      label: 'AMP/ASCO/CAP Category',
      required: false,
      isMultiSelect: false,
      placeholder: 'Select AMP/ASCO/CAP Category',
      tooltip:
        'If applicable, please provide the AMP/ASCO/CAP somatic variant classification.',
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.optionValues.set(OPTION_ORDER)

    const requires = this.state?.requires.requiresAmpLevel$
    if (!requires) {
      if (this.state) {
        console.warn(
          `${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`
        )
      }
      this.connectValueDescription()
      return
    }

    // one effect owns description, extraType, required and disabled together;
    // the old field split them across two subscriptions that overwrote each
    // other's description depending on which emitted last
    const isRequired = toSignal(requires, { injector: this.injector })
    effect(() => this.applyGate(isRequired() ?? false, this.selected()), {
      injector: this.injector,
    })
  }

  protected override descriptionFor(value: AmpLevel) {
    return optionText.get(value)
  }

  protected descriptionForCategory(value: AmpLevel) {
    return optionText.get(value)
  }

  private applyGate(isRequired: boolean, value?: AmpLevel): void {
    if (!isRequired) {
      this.props.required = false
      this.props.disabled = true
      this.props.description = REQUIRES_TYPE_PROMPT
      this.props.extraType = 'prompt'
      if (value !== undefined) this.resetField()
    } else {
      this.props.required = true
      this.props.disabled = false
      this.props.description = value
        ? optionText.get(value)
        : CLASSIFICATION_PROMPT
      this.props.extraType = 'description'
    }
    this.markDirty()
  }
}
