import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Type,
  effect,
  inject,
  signal,
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClinvarOptions } from '@app/forms/utilities/input-formatters'
import { CvcFieldBase } from '@app/forms/select'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
  FormlyModule,
} from '@ngx-formly/core'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'

export type CvcClinvarInputFieldOptions = Partial<
  FieldTypeConfig<CvcClinvarInputFieldProps>
>

export interface CvcClinvarInputFieldProps extends FormlyFieldProps {
  /** rendered inside a repeat-field, which supplies its own label */
  isRepeatItem?: boolean
  /** offer the Unspecified/NA/Not Found/Found radio group */
  showExistenceOptions?: boolean
}

export interface CvcClinvarInputFieldConfig
  extends FormlyFieldConfig<CvcClinvarInputFieldProps> {
  type: 'clinvar-input' | 'clinvar-multi-input' | Type<CvcClinvarInputField>
}

/** the two sentinels the API uses in place of a list of IDs */
const NONE_FOUND = 'NONE FOUND'
const NOT_APPLICABLE = 'NA'

/**
 * ClinVar IDs are a list of strings, but "we looked and found none" and "this
 * variant cannot have any" are answers too, and the API encodes them as
 * sentinel entries in that same list. The radio group and the tag input are
 * therefore two views of one control.
 */
@Component({
  selector: 'cvc-clinvar-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzGridModule,
    NzRadioModule,
    NzSelectModule,
    NzTooltipModule,
  ],
  templateUrl: './clinvar-input.type.html',
})
export class CvcClinvarInputField extends CvcFieldBase<
  Maybe<string[]>,
  FieldTypeConfig<CvcClinvarInputFieldProps>
> {
  private readonly injector = inject(Injector)

  defaultOptions: CvcClinvarInputFieldOptions = {
    modelOptions: {
      // update model when focus leaves field
      // (template's keydown.enter listener blurs the field, updating the model)
      updateOn: 'blur',
    },
    props: {
      label: 'Enter value',
      placeholder: 'Enter value and hit Return',
      description:
        'Specify if Clinvar IDs exist, or if they are not applicable for this variant.',
    },
  }

  protected readonly existence = signal<Maybe<ClinvarOptions>>(undefined)
  protected readonly showTagSelect = signal(false)

  protected readonly selectOptions = [
    {
      value: undefined,
      label: 'Unspecified',
      tooltip: 'Existence of ClinVar IDs for this variant is unspecified.',
    },
    {
      value: ClinvarOptions.NotApplicable,
      label: 'Not Applicable',
      tooltip: 'ClinVar IDs are not applicable to this variant.',
    },
    {
      value: ClinvarOptions.NoneFound,
      label: 'Were Not Found',
      tooltip: 'A search was performed, and no ClinVar IDs were found.',
    },
    {
      value: ClinvarOptions.Found,
      label: 'Were Found',
      tooltip:
        'A search was performed, and ClinVar IDs were found (enter IDs below).',
    },
  ]

  override ngOnInit(): void {
    super.ngOnInit()
    effect(() => this.readValue(this.value()), { injector: this.injector })
  }

  /** the radio group reports which of the four answers the curator picked */
  protected onExistenceChange(option: Maybe<ClinvarOptions>): void {
    const value = this.formControl.value as Maybe<string[]>

    if (option === undefined) {
      if (value !== undefined) this.formControl.setValue(undefined)
      return
    }
    if (option === ClinvarOptions.NoneFound) {
      if (!value?.includes(NONE_FOUND)) this.formControl.setValue([NONE_FOUND])
      return
    }
    if (option === ClinvarOptions.NotApplicable) {
      if (!value?.includes(NOT_APPLICABLE)) {
        this.formControl.setValue([NOT_APPLICABLE])
      }
      return
    }
    // Found: clear a sentinel out of the way so IDs can be typed
    if (
      value === undefined ||
      value.includes(NONE_FOUND) ||
      value.includes(NOT_APPLICABLE)
    ) {
      this.formControl.setValue([])
    }
  }

  private readValue(value: Maybe<string[]>): void {
    if (value === undefined) {
      this.existence.set(undefined)
      this.showTagSelect.set(false)
      return
    }
    if (value.includes(NONE_FOUND)) {
      this.existence.set(ClinvarOptions.NoneFound)
      this.showTagSelect.set(false)
      return
    }
    if (value.includes(NOT_APPLICABLE)) {
      this.existence.set(ClinvarOptions.NotApplicable)
      this.showTagSelect.set(false)
      return
    }
    this.existence.set(ClinvarOptions.Found)
    this.showTagSelect.set(true)
  }
}
