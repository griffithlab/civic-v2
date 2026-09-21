import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'cvc-assertion-specification-codes-submit',
    templateUrl: './assertion-specification-codes-submit.page.html',
    standalone: false
})
export class AssertionSpecificationCodesSubmitPage implements OnInit {
  private route = inject(ActivatedRoute);
  private paramMap = toSignal(this.route.paramMap)
  readonly assertionId?: number;

  constructor() {
    this.assertionId = +this.paramMap()?.get('assertionId')!
  }

  ngOnInit(): void {}
}
