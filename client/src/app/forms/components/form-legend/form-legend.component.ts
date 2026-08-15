import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPopoverModule } from 'ng-zorro-antd/popover'

/** One field state, styled to match how the form-field wrapper paints it. */
interface CvcFieldLegendItem {
  /** doubles as the CSS class, matching the wrapper's state classes */
  readonly state: 'required' | 'optional' | 'valid' | 'error' | 'disabled'
  readonly label: string
  readonly hint: string
}

/**
 * Explains the form-field label states. Rendered in the form card's header:
 * inline on wide screens, behind a "Form Legend" button on narrow ones, both
 * from the same template.
 *
 * Colours come from themes/field-states.less, the same variables the
 * form-field wrapper paints with, so the legend cannot drift from the fields
 * it describes.
 */
@Component({
  selector: 'cvc-form-legend',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, NzButtonModule, NzPopoverModule],
  templateUrl: './form-legend.component.html',
  styleUrl: './form-legend.component.less',
})
export class CvcFormLegendComponent {
  protected readonly items: readonly CvcFieldLegendItem[] = [
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
    {
      state: 'valid',
      label: 'Valid',
      hint: 'Filled in and accepted',
    },
    {
      state: 'error',
      label: 'Error',
      hint: 'Required and empty, or filled in incorrectly',
    },
    {
      state: 'disabled',
      label: 'Unavailable',
      hint: 'Does not apply to the entity type selected above',
    },
  ]
}
