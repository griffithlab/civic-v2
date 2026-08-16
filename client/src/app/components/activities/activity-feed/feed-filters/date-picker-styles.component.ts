import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core'

/**
 * Carries ng-zorro's date-picker stylesheet so it ships in the activity feed's
 * lazy chunk instead of the global stylesheet.
 *
 * ## Why this exists
 *
 * ng-zorro style entries are all-or-nothing and global: `styles.less` imports
 * one `entry.less` per component the app uses, and every byte lands in the
 * render-blocking `styles.css`. `nz-date-picker` is used in exactly one place —
 * the two date filters below this file — on a route that is itself lazy, yet its
 * 26 kB was charged to first paint on every page in the app.
 *
 * ## Why a separate component rather than encapsulation: 'none' on feed-filters
 *
 * The picker renders its panel into a CDK overlay attached to `<body>`, outside
 * the component's DOM, so Angular's emulated encapsulation cannot reach it — the
 * `_ngcontent` attribute is never applied there. The same is true of the
 * trigger's internals, which belong to `NzDatePickerComponent`'s own template.
 * So these rules genuinely have to be global; `ViewEncapsulation.None` is the
 * only way to emit component styles globally.
 *
 * Putting `None` on `feed-filters` itself would have worked for the picker and
 * broken that component: its own stylesheet is written in terms of `:host`, and
 * Angular does not rewrite `:host` under `None` — it emits the CSS verbatim,
 * where `:host` matches nothing outside a shadow root. Its `display: block` and
 * its two `::ng-deep` width rules would have silently stopped applying. A
 * dedicated carrier with no styles of its own has no `:host` to lose, and leaves
 * every existing component's encapsulation untouched.
 *
 * ## What to know when changing this
 *
 * The styles load when this component first renders and, like any
 * `ViewEncapsulation.None` styles, stay for the life of the page. Anything else
 * that wants an `nz-date-picker` must either import this component or move the
 * entry back to `styles.less` — a picker rendered without it is unstyled, not
 * broken, so it fails visibly rather than subtly.
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
