import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { EvidenceLevel, Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { $enum } from 'ts-enum-util'

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

export interface CvcLevelSelectFieldProps extends CvcEnumSelectFieldProps {}

export interface CvcLevelSelectFieldConfig
  extends FormlyFieldConfig<CvcLevelSelectFieldProps> {
  type: 'level-select' | Type<CvcLevelSelectField>
}

@Component({
  selector: 'cvc-level-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTagModule,
    CvcPipesModule,
  ],
  templateUrl: './level-select.type.html',
})
export class CvcLevelSelectField extends CvcEnumSelectFieldBase<
  EvidenceLevel,
  CvcLevelSelectFieldProps
> {
  defaultOptions: CvcLevelSelectFieldOptions = {
    props: {
      label: 'Evidence Level',
      required: false,
      isMultiSelect: false,
      placeholder: 'Select Evidence Level',
      tooltip: 'Type of study performed to produce the evidence statement',
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.optionValues.set($enum(EvidenceLevel).getValues())
    this.connectValueDescription()
  }

  protected override descriptionFor(value: EvidenceLevel): Maybe<string> {
    return optionText.get(value)
  }
}
