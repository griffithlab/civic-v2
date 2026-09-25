import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcAttributeTagComponent } from '@app/forms/components/attribute-tag/attribute-tag.component'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { Maybe, VariantOrigin } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'

const optionText = new Map<VariantOrigin, string>([
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

export interface CvcOriginSelectFieldProps extends CvcEnumSelectFieldProps {}

export interface CvcOriginSelectFieldConfig
  extends FormlyFieldConfig<CvcOriginSelectFieldProps> {
  type: 'origin-select' | Type<CvcOriginSelectField>
}

@Component({
  selector: 'cvc-origin-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    CvcAttributeTagComponent,
  ],
  templateUrl: './origin-select.type.html',
})
export class CvcOriginSelectField extends CvcEnumSelectFieldBase<
  VariantOrigin,
  CvcOriginSelectFieldProps
> {
  defaultOptions: CvcOriginSelectFieldOptions = {
    props: {
      label: 'Variant Origin',
      required: false,
      isMultiSelect: false,
      placeholder: 'Select Variant Origin',
      tooltip: `Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study`,
    },
  }

  // the option order is the map's, not the schema enum's — Somatic first,
  // NA last, which is the order curators read them in
  override ngOnInit(): void {
    super.ngOnInit()
    this.optionValues.set(Array.from(optionText.keys()))
    this.connectValueDescription()
  }

  protected override descriptionFor(value: VariantOrigin): Maybe<string> {
    return optionText.get(value)
  }
}
