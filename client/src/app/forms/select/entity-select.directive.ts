import { Directive, inject } from '@angular/core'
import { NzSelectComponent } from 'ng-zorro-antd/select'

/**
 * Applies CIViC's entity-select chrome to an nz-select.
 *
 * The select cannot be a wrapping component: nz-select binds its options via
 * `@ContentChildren` at template declaration, so `<nz-option>`s re-projected
 * through a wrapper's `<ng-content>` are never seen (projected-options.spec.ts).
 * Defaults are assigned in the constructor, which runs before nz-select's own
 * ngOnChanges/ngOnInit, so they behave exactly like static attributes — the
 * per-field bindings that do vary (mode, placeholder, loading, templates) stay
 * in the field template where nz-select's change handling can see them.
 */
@Directive({
  selector: 'nz-select[cvcEntitySelect]',
  standalone: true,
})
export class CvcEntitySelectDirective {
  constructor() {
    const select = inject(NzSelectComponent)
    select.nzShowSearch = true
    select.nzServerSearch = true
    select.nzAllowClear = true
    select.nzAutoClearSearchValue = true
    select.nzDropdownMatchSelectWidth = true
    select.nzOptionHeightPx = 30
    select.nzSuffixIcon = 'search'
    select.nzShowArrow = false
  }
}
