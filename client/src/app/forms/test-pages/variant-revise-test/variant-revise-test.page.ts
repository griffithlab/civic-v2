import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-variant-form',
  templateUrl: './variant-revise-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantReviseTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
