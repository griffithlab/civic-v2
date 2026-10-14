import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

/** One field state, rendered as a chip tinted like the field box itself. */
interface CvcFieldLegendItem {
  /** doubles as the CSS class, matching the wrapper's state classes */
  readonly state: 'required' | 'optional' | 'ok' | 'error'
  readonly label: string
  readonly hint: string
}

/**
 * Explains the form-field label states, inline in the form card's header.
 *
 * Two lines that each stay whole: side by side when there's room, stacked
 * otherwise, which fits a 320px card without a popover. Colors come from
 * themes/field-states.less, the variables the form-field wrapper paints
 * with, so the legend can't drift from the fields.
 */
@Component({
  selector: 'cvc-form-legend',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzTagModule, NzTooltipModule, NzTypographyModule],
  templateUrl: './form-legend.component.html',
  styleUrl: './form-legend.component.less',
})
export class CvcFormLegendComponent {
  /**
   * Two lines, each pairing the states that answer the same question: whether
   * what is in the field passes, and whether it had to be filled at all.
   */
  protected readonly lines: readonly (readonly CvcFieldLegendItem[])[] = [
    [
      {
        state: 'ok',
        label: 'OK',
        hint: 'Filled in and accepted',
      },
      {
        state: 'error',
        label: 'Error',
        hint: 'Required and empty, or filled in incorrectly',
      },
    ],
    [
      {
        state: 'required',
        label: 'Required',
        hint: 'Must be filled in before the form can be submitted',
      },
      {
        state: 'optional',
        label: 'Optional',
        hint: 'May be left empty',
      },
    ],
  ]
}
