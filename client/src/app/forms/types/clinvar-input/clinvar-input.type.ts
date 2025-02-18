import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Type,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { StringTagField } from '@app/forms/mixins/string-input-field.mixin'
import { ClinvarOptions } from '@app/forms/utilities/input-formatters'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import {
  BehaviorSubject,
  Subject,
  map,
  Observable,
  withLatestFrom,
  combineLatest,
  tap,
} from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcBaseInputFieldOptions = Partial<
  FieldTypeConfig<CvcClinvarInputFieldProps>
>
export interface CvcClinvarInputFieldProps extends FormlyFieldProps {
  description?: string
}

export interface CvcBaseInputFieldConfig
  extends FormlyFieldConfig<CvcClinvarInputFieldProps> {
  type: 'clinvar-input' | 'clinvar-input-item' | Type<CvcClinvarInputField>
}

const BaseInputMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcClinvarInputFieldProps>, string[]>(),
  StringTagField
)

@UntilDestroy()
@Component({
  selector: 'cvc-clinvar-input',
  templateUrl: './clinvar-input.type.html',
  styleUrls: ['./clinvar-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcClinvarInputField
  extends BaseInputMixin
  implements AfterViewInit
{
  defaultOptions: Partial<FieldTypeConfig<CvcClinvarInputFieldProps>> = {
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

  clinvarIds$ = new BehaviorSubject<string[]>([])
  values = new Set<string>()

  showClinvarIdEntry$ = new BehaviorSubject<boolean>(false)
  selectModel: Maybe<ClinvarOptions> = undefined

  existenceChange$: Subject<Maybe<ClinvarOptions>>
  existenceModel$: BehaviorSubject<Maybe<ClinvarOptions>>
  showTagSelect$: BehaviorSubject<boolean>

  selectOptions = [
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

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.existenceChange$ = new Subject<Maybe<ClinvarOptions>>()
    this.existenceModel$ = new BehaviorSubject<Maybe<ClinvarOptions>>(undefined)
    this.showTagSelect$ = new BehaviorSubject<boolean>(false)

    // this.existenceChange$.pipe(
    //   withLatestFrom(this.formControl.valueChanges),
    //   map(([opts, value]: [Maybe<ClinvarOptions>, Maybe<string[]>]) => {
    //     return opts === ClinvarOptions.Found || this.formControl.value
    //   })
    // )
  }

  ngAfterViewInit(): void {
    this.configureBaseField()
    this.configureStringTagField()

    // show id select based on form field value
    // if undefined or array contains NOT FOUND or NA set false
    // else set true
    this.onValueChange$.pipe(untilDestroyed(this)).subscribe((value) => {
      if (value === undefined) {
        this.existenceModel$.next(undefined)
        this.showTagSelect$.next(false)
      } else if (value.includes('NONE FOUND') || value.includes('NA')) {
        if (value.includes('NONE FOUND')) {
          this.existenceModel$.next(ClinvarOptions.NoneFound)
        } else if (value.includes('NA')) {
          this.existenceModel$.next(ClinvarOptions.NotApplicable)
        }
        this.showTagSelect$.next(false)
      } else {
        this.existenceModel$.next(ClinvarOptions.Found)
        this.showTagSelect$.next(true)
      }
    })

    // set form control value when existenceChange$ updates
    this.existenceChange$
      .pipe(
        map((option) => {
          const value = this.formControl.value
          if (option === undefined && this.formControl.value !== undefined) {
            this.formControl.setValue(undefined)
          } else if (
            option === ClinvarOptions.NoneFound &&
            !value.includes('NONE FOUND')
          ) {
            this.formControl.setValue(['NONE FOUND'])
          } else if (
            option === ClinvarOptions.NotApplicable &&
            !value.includes('NA')
          ) {
            this.formControl.setValue(['NA'])
          } else if (option === ClinvarOptions.Found) {
            if (
              value === undefined ||
              value.includes('NONE FOUND') ||
              value.includes('NA')
            ) {
              this.formControl.setValue([])
            }
          }
        }),
        untilDestroyed(this)
      )
      .subscribe()
  }
}
