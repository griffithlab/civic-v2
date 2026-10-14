import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Type,
  effect,
  inject,
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcFieldBase } from '@app/forms/select'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
  FormlyModule,
} from '@ngx-formly/core'
import { NzRateModule } from 'ng-zorro-antd/rate'

const optionText: Record<number, string> = {
  1: 'Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.',
  2: 'Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.',
  3: 'Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.',
  4: 'Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.',
  5: 'Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods.',
}

export type CvcRatingFieldOptions = Partial<FieldTypeConfig<CvcRatingFieldProps>>

export interface CvcRatingFieldProps extends FormlyFieldProps {
  count: number
  hoverText: string[]
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcRatingSelectFieldConfig
  extends FormlyFieldConfig<CvcRatingFieldProps> {
  type: 'rating' | Type<CvcRatingField>
}

/**
 * A star widget rather than a select, despite having lived on the enum-select
 * mixin — it only ever used that mixin's resetField, which it never called.
 */
@Component({
  selector: 'cvc-rating',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule, FormlyModule, NzRateModule],
  templateUrl: './rating.type.html',
  styleUrl: './rating.type.less',
})
export class CvcRatingField extends CvcFieldBase<
  Maybe<number>,
  FieldTypeConfig<CvcRatingFieldProps>
> {
  private readonly injector = inject(Injector)

  defaultOptions: CvcRatingFieldOptions = {
    props: {
      label: 'Evidence Rating',
      count: 5,
      tooltip: `A representation of the curator's confidence in the quality of the summarized evidence`,
      hoverText: [],
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    // a fresh array per instance: pushing onto props.hoverText appended to the
    // array declared in defaultOptions, which every rating field shares
    this.props.hoverText = Object.values(optionText)

    effect(() => this.describe(this.value()), { injector: this.injector })
  }

  /** nz-rate clears itself by emitting 0, which is not a rating */
  protected onRatingChange(rating: number): void {
    this.formControl.setValue(rating === 0 ? undefined : rating)
  }

  private describe(rating: Maybe<number>): void {
    if (!rating) {
      this.props.description = undefined
      this.props.extraType = 'prompt'
    } else {
      this.props.description = optionText[rating]
      this.props.extraType = 'description'
    }
  }
}
