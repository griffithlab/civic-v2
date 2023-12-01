import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Type,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { StringTagField } from '@app/forms/mixins/string-input-field.mixin'
import { Maybe } from '@app/generated/civic.apollo'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import mixin from 'ts-mixin-extended'

export type CvcTagInputOptions = Partial<FieldTypeConfig<CvcTagInputProps>>
export interface CvcTagInputProps extends FormlyFieldProps {
  isMultiInput?: boolean
}

export interface CvcTagInputConfig extends FormlyFieldConfig<CvcTagInputProps> {
  type: 'tag-input' | 'tag-input-item' | Type<CvcTagInputField>
}

const TagInputMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcTagInputProps>, Maybe<string | number>>(),
  StringTagField
)

@Component({
  selector: 'cvc-tag-input',
  templateUrl: './tag-input.type.html',
  styleUrls: ['./tag-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcTagInputField extends TagInputMixin implements AfterViewInit {
  defaultOptions: Partial<FieldTypeConfig<CvcTagInputProps>> = {
    modelOptions: {
      // update model when focus leaves field
      // (template's keydown.enter listener blurs the field, updating the model)
      updateOn: 'blur',
    },
    props: {
      label: 'Enter value',
    },
  }

  constructor() {
    super()
  }

  ngAfterViewInit(): void {
    this.configureBaseField()
    this.configureStringTagField()
  } // ngAfterViewInit
}
