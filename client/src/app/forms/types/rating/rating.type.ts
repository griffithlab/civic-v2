import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Type,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EnumSelectField } from '@app/forms/mixins/enum-select-field.mixin'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject } from 'rxjs'
import mixin from 'ts-mixin-extended'

const optionText: { [option: string]: string } = {
  1: 'Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.',
  2: 'Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.',
  3: 'Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.',
  4: 'Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.',
  5: 'Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods.',
}

export type CvcRatingFieldOptions = Partial<
  FieldTypeConfig<CvcRatingFieldProps>
>

interface CvcRatingFieldProps extends FormlyFieldProps {
  label: string
  count: number
  description?: string
  tooltip?: string
  hoverText: string[]
  extraType?: CvcFormFieldExtraType
}

export interface CvcRatingSelectFieldConfig
  extends FormlyFieldConfig<CvcRatingFieldProps> {
  type: 'rating' | Type<CvcRatingField>
}

const RatingMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcRatingFieldProps>, Maybe<number>>(),
  EnumSelectField<number, number>()
)

@Component({
    selector: 'cvc-rating',
    templateUrl: './rating.type.html',
    styleUrls: ['./rating.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcRatingField extends RatingMixin implements AfterViewInit {
  // LOCAL SOURCE STREAMS
  rating$: BehaviorSubject<Maybe<number>>

  // LOCAL INTERMEDIATE STREAMS
  // LOCAL PRESENTATION STREAMS

  // FieldTypeConfig defaults
  defaultOptions: CvcRatingFieldOptions = {
    props: {
      label: 'Evidence Rating',
      count: 5,
      tooltip: `A representation of the curator's confidence in the quality of the summarized evidence`,
      hoverText: [],
    },
  }

  constructor() {
    super()
    this.rating$ = new BehaviorSubject<Maybe<number>>(undefined)
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn

    if (this.formControl.value) {
      this.rating$.next(this.formControl.value)
    }

    // provide strings for nz-rate's tooltips
    Object.entries(optionText).map(([_key, val]) => {
      this.props.hoverText.push(val)
    })

    // update field value on rating click
    this.rating$
      .pipe(untilDestroyed(this))
      .subscribe((rating: Maybe<number>) => {
        this.formControl.setValue(rating)
      })

    // update field value description on changes
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((rating: Maybe<number>) => {
        if (!rating || rating === 0) {
          // zero is not a valid rating, unset model instead
          this.formControl.setValue(undefined)
          this.props.description = undefined
          this.props.extraType = 'prompt'
        } else {
          this.props.description = optionText[rating]
          this.props.extraType = 'description'
        }
      })
  }

  configureStateConnections(): void {
    // TODO: implement rating$ subject on state classes(?)
  }
}
