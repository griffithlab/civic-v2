import { Directive, inject } from '@angular/core'
import { NzSelectComponent } from 'ng-zorro-antd/select'

/**
 * Applies CIViC's entity-select chrome to an nz-select.
 *
 * A directive, not a wrapper: nz-select binds options at template
 * declaration, so re-projected `<nz-option>`s are never seen
 * (projected-options.spec.ts). Defaults are set in the constructor, before
 * nz-select's ngOnChanges, so they act like static attributes; bindings that
 * vary (mode, placeholder, loading, templates) stay in the field template.
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
