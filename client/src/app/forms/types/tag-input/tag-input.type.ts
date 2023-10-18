import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Type,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { StringTagField } from '@app/forms/mixins/string-input-field.mixin'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, Subject } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcBaseInputFieldOptions = Partial<
  FieldTypeConfig<CvcBaseInputFieldProps>
>
export interface CvcBaseInputFieldProps extends FormlyFieldProps {
}

export interface CvcBaseInputFieldConfig
  extends FormlyFieldConfig<CvcBaseInputFieldProps> {
  type: 'tag-input' | 'tag-input-item' | Type<CvcBaseInputField>
}

const BaseInputMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcBaseInputFieldProps>,
    Maybe<string[] | number[]>
  >(),
  StringTagField
)

@Component({
  selector: 'cvc-tag-input',
  templateUrl: './tag-input.type.html',
  styleUrls: ['./tag-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcBaseInputField extends BaseInputMixin implements AfterViewInit {
  defaultOptions: Partial<FieldTypeConfig<CvcBaseInputFieldProps>> = {
    modelOptions: {
      // update model when focus leaves field
      // (template's keydown.enter listener blurs the field, updating the model)
      updateOn: 'blur',
    },
    props: {
      label: 'Enter value',
      placeholder: 'Enter value and hit Return'
    },
  }

  tags$ = new Subject<string[]>()
  values = new Set<string>()

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  onEnter(e: Event) {
    let target = (e.target as HTMLInputElement)
    if(target.value) {
      this.values.add(target.value)
      target.value = ''
    }
    let arr = Array.from(this.values)
    this.tags$.next(arr)
    this.formControl.setValue(arr)
  }

  tagClosed(tag: string) {
    this.values.delete(tag)
    let arr = Array.from(this.values)
    this.tags$.next(arr)
    this.formControl.setValue(arr)
    this.tags$.next(arr)
  }

  ngAfterViewInit(): void {
    this.configureBaseField()
    this.configureStringTagField()
    if(this.formControl.value && Array.isArray(this.formControl.value)) {
      this.formControl.value.forEach(v => this.values.add(v))
      this.tags$.next(this.formControl.value)
      this.cdr.detectChanges()
    }
  } // ngAfterViewInit
}
