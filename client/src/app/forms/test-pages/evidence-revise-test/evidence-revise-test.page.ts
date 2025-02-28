import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'cvc-evidence-revise-test-page',
    templateUrl: './evidence-revise-test.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class EvidenceReviseTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
