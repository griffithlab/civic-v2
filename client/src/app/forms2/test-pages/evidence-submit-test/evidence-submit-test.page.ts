import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-nonstate-form',
  templateUrl: './evidence-submit-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvidenceSubmitTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
