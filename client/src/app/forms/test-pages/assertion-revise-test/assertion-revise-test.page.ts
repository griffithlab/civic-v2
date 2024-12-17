import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-nonstate-form',
  templateUrl: './assertion-revise-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AssertionReviseTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
