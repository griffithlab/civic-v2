import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core'

/**
 * Carries ng-zorro's date-picker stylesheet so it ships in the activity feed's
 * lazy chunk instead of the render-blocking global stylesheet.
 *
 * The picker's panel renders in a CDK overlay on `<body>`, out of reach of
 * emulated encapsulation, so its rules must be global, which only
 * `ViewEncapsulation.None` does. They sit on this style-less carrier because
 * Angular doesn't rewrite `:host` under `None`, and feed-filters' own `:host`
 * rules would stop applying.
 *
 * Once loaded, the styles stay for the life of the page. Any other
 * `nz-date-picker` must import this component or restore the entry in
 * `styles.less`; without it the picker renders unstyled.
 */
@Component({
  selector: 'cvc-date-picker-styles',
  template: '',
  styleUrl: './date-picker-styles.component.less',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: none' },
})
export class CvcDatePickerStylesComponent {}
