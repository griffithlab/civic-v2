import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { ReferenceBuild } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { $enum } from 'ts-enum-util'

export type CvcReferenceBuildSelectFieldOptions = Partial<
  FieldTypeConfig<CvcReferenceBuildSelectFieldProps>
>

export interface CvcReferenceBuildSelectFieldProps
  extends CvcEnumSelectFieldProps {}

export interface CvcReferenceBuildSelectFieldConfig
  extends FormlyFieldConfig<CvcReferenceBuildSelectFieldProps> {
  type: 'reference-build-select' | Type<CvcReferenceBuildSelectField>
}

@Component({
  selector: 'cvc-reference-build-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    NzTagModule,
  ],
  templateUrl: './reference-build-select.type.html',
})
export class CvcReferenceBuildSelectField extends CvcEnumSelectFieldBase<
  ReferenceBuild,
  CvcReferenceBuildSelectFieldProps
> {
  defaultOptions: CvcReferenceBuildSelectFieldOptions = {
    props: {
      label: 'Reference Build',
      required: false,
      isMultiSelect: false,
      description:
        'Select the human genome reference sequence from which these coordinates are obtained',
      placeholder: 'Select Reference Build',
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.optionValues.set($enum(ReferenceBuild).getValues())
  }
}
