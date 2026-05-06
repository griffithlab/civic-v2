import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'cvc-variant-submit-test',
    templateUrl: './variant-submit-test.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class VariantSubmitTestPage {}
