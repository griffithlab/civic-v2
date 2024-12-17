import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-gene-form',
  templateUrl: './gene-revise-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GeneReviseTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
