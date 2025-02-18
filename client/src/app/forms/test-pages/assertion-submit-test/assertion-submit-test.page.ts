import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-assertion-submit-test-page',
  templateUrl: './assertion-submit-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AssertionSubmitTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
