import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFieldBase } from '@app/forms/select'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
  FormlyModule,
} from '@ngx-formly/core'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NzSelectModule } from 'ng-zorro-antd/select'

export type CvcTagInputOptions = Partial<FieldTypeConfig<CvcTagInputProps>>

export interface CvcTagInputProps extends FormlyFieldProps {
  isMultiInput?: boolean
}

export interface CvcTagInputConfig extends FormlyFieldConfig<CvcTagInputProps> {
  type: 'tag-input' | 'tag-input-item' | Type<CvcTagInputField>
}

/**
 * The StringTagField mixin this used to carry was inert: it created a
 * `tagLabel$` subject that nothing ever emitted a label into, so the closeable
 * tag branch of the template was unreachable and its close handler could never
 * fire. Both are gone with the mixin.
 */
@Component({
  selector: 'cvc-tag-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
  ],
  templateUrl: './tag-input.type.html',
  styleUrl: './tag-input.type.less',
})
export class CvcTagInputField extends CvcFieldBase<
  Maybe<string | number>,
  FieldTypeConfig<CvcTagInputProps>
> {
  defaultOptions: CvcTagInputOptions = {
    props: {
      label: 'Enter value',
    },
  }
}
