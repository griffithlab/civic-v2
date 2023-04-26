import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Type,
} from '@angular/core'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { StringTagField } from '@app/forms2/mixins/string-input-field.mixin'
import { ClinvarOptions } from '@app/forms2/utilities/input-formatters'
import { Maybe } from '@app/generated/civic.apollo'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, Subject } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcBaseInputFieldOptions = Partial<
  FieldTypeConfig<CvcClinvarInputFieldProps>
>
export interface CvcClinvarInputFieldProps extends FormlyFieldProps {
}

export interface CvcBaseInputFieldConfig
  extends FormlyFieldConfig<CvcClinvarInputFieldProps> {
  type: 'clinvar-input' | 'clinvar-input-item' | Type<CvcClinvarInputField>
}

const BaseInputMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcClinvarInputFieldProps>,
    Maybe<string[]>
  >(),
  StringTagField
)

@Component({
  selector: 'cvc-clinvar-input',
  templateUrl: './clinvar-input.type.html',
  styleUrls: ['./clinvar-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcClinvarInputField extends BaseInputMixin implements AfterViewInit {
  defaultOptions: Partial<FieldTypeConfig<CvcClinvarInputFieldProps>> = {
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
  
  clinvarIds$ = new BehaviorSubject<string[]>([])
  values = new Set<string>()

  showClinvarIdEntry$ = new BehaviorSubject<boolean>(false)
  selectModel: Maybe<ClinvarOptions> = undefined

  selectOptions = [
    {
      value: ClinvarOptions.NotApplicable,
      label: 'Clinvar IDs not applicable for this variant',
    },
    {
      value: ClinvarOptions.NoneFound,
      label: 'Clinvar IDs do not exist for this variant',
    },
    {
      value: ClinvarOptions.Found,
      label: 'Clinvar IDs were found for this variant',
    },
    {
      value: undefined,
      label: '',
    },
  ]

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  optionSelected(e: number) {
    const selectedOption = (e as ClinvarOptions)
    this.values.clear()
    this.clinvarIds$.next([])
    if (selectedOption !== undefined && selectedOption !== null) {
      if(selectedOption == ClinvarOptions.Found) {
        this.showClinvarIdEntry$.next(true)
        this.formControl.setValue([])
      } else if (selectedOption == ClinvarOptions.NoneFound) {
        this.showClinvarIdEntry$.next(false)
        this.formControl.setValue(['NONE FOUND'])
      } else if (selectedOption == ClinvarOptions.NotApplicable) {
        console.log("HERE")
        this.showClinvarIdEntry$.next(false)
        this.formControl.setValue(['NA'])
     }
    } else {
      this.showClinvarIdEntry$.next(false)
      this.formControl.setValue([])
      this.clinvarIds$.next([])
    }
  }

  onEnter(e: Event) {
    let target = (e.target as HTMLInputElement)
    if(target.value) {
      this.values.add(target.value)
      target.value = ''
    }
    let arr = Array.from(this.values)
    this.clinvarIds$.next(arr)
    this.formControl.setValue(arr)
  }
  
  tagClosed(tag: string) {
    this.values.delete(tag)
    let arr = Array.from(this.values)
    this.clinvarIds$.next(arr)
    this.formControl.setValue(arr)
    this.clinvarIds$.next(arr)
  }

  ngAfterViewInit(): void {
    this.configureBaseField()
    this.configureStringTagField()
    const val = this.formControl.value
    if(val && Array.isArray(val)) {
      if(val[0] == "NONE FOUND") {
        this.selectModel = ClinvarOptions.NoneFound
      } else if(val[0] == 'N/A') {
        this.selectModel = ClinvarOptions.NotApplicable
      } else {
        this.selectModel = ClinvarOptions.Found
        val.forEach(v => this.values.add(v))
        this.showClinvarIdEntry$.next(true)
      }
      this.clinvarIds$.next(val)
      this.cdr.detectChanges()
    }
  } 
}
