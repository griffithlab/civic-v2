import { ChangeDetectorRef, Component } from '@angular/core'

@Component({
  selector: 'cvc-variantgroup-revise-test-page',
  templateUrl: './variantgroup-revise-test.page.html',
  standalone: false,
})
export class VariantgroupReviseTestPage {
  constructor(private cdr: ChangeDetectorRef) {}
}
